'use client';

import TablaCandidatos from '../../components/TablaCandidatos';

const candidatosTabla = [
    {id: 1, nombre: "Ana Pérez", email: "ana@mail.com", experiencia: 3, linkCV: "https://"},
    {id: 2, nombre: "Luis Gómez", email: "luis@mail.com", experiencia: 5, linkCV: "https://"}
];

export default function TablaPage() {
    return (
        <main style={{padding: '32px'}}>
            <TablaCandidatos candidatos={candidatosTabla}/>
        </main>
    );

}

