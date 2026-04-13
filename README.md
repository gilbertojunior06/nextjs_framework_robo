# 🤖 Dashboard de Monitoramento Industrial - Robotic Cell (SENAI | Tech)

Este projeto é um sistema de monitoramento em tempo real (**Digital Twin**) desenvolvido como parte do currículo do curso no **SENAI | Tech**. O dashboard exibe o status operacional, telemetria de sensores e controles de segurança de uma célula robótica industrial (FANUC).

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-green)
![Tecnologia](https://img.shields.io/badge/Framework-Next.js%2014-blue)
![Porta-SSE](https://img.shields.io/badge/Porta-3001-orange)

---

## 🚀 Funcionalidades

- **Monitoramento em Tempo Real:** Conexão via **SSE (Server-Sent Events)** para atualização instantânea dos dados sem necessidade de refresh.
- **Interface Industrial:** Design focado em UX industrial, desenvolvido inicialmente no **Figma** e implementado com **Tailwind CSS**.
- **Controle de Acessibilidade:** Sistema integrado para ajuste de contraste e aumento de fontes para operadores.
- **Segurança Industrial:** Monitoramento de botão de Emergência (E-STOP) e estados de proteção do robô.
- **Logs de Eventos:** Registro histórico em tela de todas as ações e sinais recebidos do Node-RED.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** Next.js (React + TypeScript).
- **Backend:** Node.js (Servidor SSE nativo para distribuição de eventos).
- **Automação/Lógica:** Node-RED (Integração com lógica de CLP e simulação de sinais).
- **Estilização:** Tailwind CSS e Lucide Icons.

---

## 📦 Como Instalar e Rodar o Projeto

### 1. Instalar Dependências
No terminal principal, instale os pacotes necessários:
```bash
npm install

2. Iniciar o Ambiente Integrado
Eu configurei um script de automação que inicia o Frontend, o Servidor SSE e o Node-RED simultaneamente:

Bash
npm run all
Dashboard: Acesse em http://localhost:3000/robo

Servidor SSE: Escutando na porta 3001/events

Interface Node-RED: Acesse em http://localhost:1880

3. Iniciar o Simulador (Opcional)
Para realizar testes de estresse ou verificar o comportamento dos sensores (Temperatura, Carga, OEE) sem depender do fluxo do Node-RED:

Bash
node simulador.js
🔌 Arquitetura de Comunicação
O fluxo de dados segue a hierarquia de automação moderna:

Sinal de Campo: O Node-RED (ou Simulador) envia um pacote JSON via protocolo HTTP POST.

Middleware (Server.js): O servidor Node.js recebe os dados e os retransmite para todos os clientes conectados.

HMI (Next.js): O Dashboard recebe o stream via SSE e atualiza os estados (LEDs, indicadores e logs) em tempo real.

👤 Desenvolvedor
Gilberto Junior 
Gilberto Antônio de Almeida Silvério Júnior Estudante de Desenvolvimento Full-Stack & Automação Industrial - SENAI Tech

Orientação: Profª. Natália - SENAI (Lógica Industrial e Automação)