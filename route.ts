import { NextResponse } from 'next/server';

// Banco de dados em memória
let dadosRobo = {
    total_pecas: 0,
    total_falhas: 0,
    taxa_acerto: "0%",
    oee: 0,
    azul: 0,
    verde: 0,
    vermelho: 0,
    ultimo_log: "Aguardando dados..."
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // O segredo está aqui: mesclamos os dados novos com os antigos
        dadosRobo = { 
            ...dadosRobo, 
            ...body 
        };

        // ESTE LOG VAI APARECER NO TERMINAL DO VS CODE
        console.log("📥 DADOS RECEBIDOS DO NODE-RED:", dadosRobo);
        
        return NextResponse.json({ status: "Sucesso" });
    } catch (error) {
        return NextResponse.json({ status: "Erro" }, { status: 400 });
    }
}

export async function GET() {
    return NextResponse.json(dadosRobo);
}