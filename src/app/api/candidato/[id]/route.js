import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req, context) {
    const id = parseInt(context.params.id);

    try {
        const candidato = await prisma.candidato.findUnique({
            where: { id },
        });

        if (!candidato) {
            return NextResponse.json({ error: 'Candidato no encontrado' }, { status: 404 });
        }

        return NextResponse.json(candidato);
    } catch (error) {
        return NextResponse.json({ error: 'Error al obtener el candidato' }, { status: 500 });
    }
}