'use client';

import FormularioPostulacion from '../../components/FormularioPostulacion'

export default function FormularioPage() {

    return (
        <main style={{padding: '32px'}}>
            <FormularioPostulacion onAdd={(nuevo) => console.log(nuevo)}/>
        </main>
    );

}

