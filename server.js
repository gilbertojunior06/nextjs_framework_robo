import http from 'http';

let clients = [];

const server = http.createServer((req, res) => {
    // Configuração de CORS para evitar bloqueios no navegador
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Responde requisições de pre-flight
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // --- CANAL DE DADOS (SSE - Conexão do Dashboard) ---
    if (req.method === 'GET' && req.url === '/events') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });

        console.log('\n✅ Dashboard Conectado em /events!');
        clients.push(res);

        req.on('close', () => {
            clients = clients.filter(client => client !== res);
            console.log('❌ Dashboard Desconectado.');
        });
        return;
    } 

    // --- ENTRADA DE DADOS (POST do Node-RED) ---
    if (req.method === 'POST' && (req.url === '/' || req.url === '/update-robot')) {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try {
                // Converte o texto recebido em objeto JavaScript
                const robotData = JSON.parse(body); 
                
                // --- LOG CUSTOMIZADO (Organizado com Array em uma linha) ---
                console.log("\n===========================================");
                console.log("🤖 Dados recebidos do Robô:");
                console.log("{");
                console.log(`  "status_robo": "${robotData.status_robo || 'N/A'}",`);
                console.log(`  "timestamp": "${robotData.timestamp || '--:--:--'}",`);
                console.log(`  "raw_bits": ${JSON.stringify(robotData.raw_bits)}`); // Array compacto
                console.log("}");
                console.log("===========================================");
                
                // Repassa os dados para todos os Dashboards via SSE
                clients.forEach(client => {
                    client.write(`data: ${body}\n\n`);
                });
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'sucesso', msg: 'Dados enviados ao dashboard' }));
            } catch (err) {
                console.error('❌ Erro no JSON recebido:', err.message);
                res.writeHead(400);
                res.end('JSON Inválido');
            }
        });
    } else {
        // Se a rota não existir
        if (req.url !== '/events') {
            res.writeHead(404);
            res.end('Rota nao encontrada.');
        }
    }
});

// Inicia o servidor na porta 3001
const PORT = 3001;
server.listen(PORT, () => {
    console.log('\n=========================================');
    console.log(`🚀 SERVIDOR SSE ATIVO NA PORTA ${PORT}`);
    console.log('=========================================');
    console.log(`FRONTEND (Next.js): http://localhost:${PORT}/events`);
    console.log(`BACKEND (Node-RED): POST para http://localhost:${PORT}/update-robot`);
    console.log('=========================================\n');
});