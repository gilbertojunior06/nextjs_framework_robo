import { NextResponse } from 'next/server';

let dadosRobo = {
    total_pecas: 0,
    total_falhas: 0,
    taxa_acerto: "0%",
    oee: 0,
    azul: 0,
    verde: 0,
    vermelho: 0,
    ultimo_log: "Aguardando sinal..."
};

// Removemos a trava do 503 por enquanto para você poder trabalhar no visual sem erros
export async function GET() {
    return NextResponse.json(dadosRobo);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        dadosRobo = { ...dadosRobo, ...body };
        return NextResponse.json({ status: "Sucesso" });
    } catch {
        return NextResponse.json({ status: "Erro" }, { status: 400 });
    }
}