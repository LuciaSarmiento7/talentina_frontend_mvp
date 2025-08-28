import { NextResponse } from 'next/server';
import prisma from "../../../../prisma/config/prisma";

export async function GET() {
    try {
        const candidatos = await prisma.candidato.findMany();
        return NextResponse.json(candidatos);
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener candidatos' }, { status: 500 });
    }
}
