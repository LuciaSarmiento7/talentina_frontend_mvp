import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req) {
    try {
        const body = await req.json();

        const nuevoCandidato = await prisma.candidato.create({
            data: {
                nombre: body.nombre,
                email: body.email,
                telefono: body.telefono,
                experiencia: body.experiencia, //anios
                experiencia1: body.experiencia1, //texto
                skills: body.skills,
                linkCV: body.linkCV
            },
        });

        return NextResponse.json(nuevoCandidato, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error al crear candidato' }, { status: 500 });
    }
}
