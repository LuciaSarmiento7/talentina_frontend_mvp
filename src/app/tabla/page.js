'use client';
import { useEffect, useState } from 'react';

import TablaCandidatos from '../../components/TablaCandidatos';

export default function TablaPage() {
    const [candidatosTabla, setCandidatosTabla] = useState([]);

    useEffect(() => {
        const traerCandidatos = async () => {
            try {
                const res = await fetch('/api/candidatos');
                const data = await res.json();
                setCandidatosTabla(data);
            } catch (err) {
                console.error("Error al traer candidatos", err);
            }
        };
        traerCandidatos();
    }, []);

    return (
        <main style={{padding: '32px'}}>
            <TablaCandidatos candidatos={candidatosTabla}/>
        </main>
    );

}

