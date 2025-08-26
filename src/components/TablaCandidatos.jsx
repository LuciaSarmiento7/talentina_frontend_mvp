import {useEffect, useState} from "react";

export default function TablaCandidatos() {
    const [candidatos, setCandidatos] = useState([]);

    useEffect(() => {
        const traerCandidatos = async () => {
            const res = await fetch("/api/candidatos");
            const data = await res.json();
            setCandidatos(data);
        };

        traerCandidatos();
    }, []);

return (
        <div style={estilos.contenedor}>
            <h2 style={estilos.titulo}>Candidatos</h2>
            <table style={estilos.tabla}>

                {/* CABECERA DE LA TABLA */}
                <thead>
                <tr>
                    <th style={estilos.th}>Nombre</th>
                    <th style={estilos.th}>Email</th>
                    <th style={estilos.th}>Experiencia</th>
                    <th style={estilos.th}>CV</th>
                </tr>
                </thead>

                {/* VA MOSTRANDO LOS DATOS DE CADA CANDIDATO */}
                <tbody>
                {candidatos.map((candidato) => (
                    <tr key={c.id} style={estilos.fila}>
                        <td style={estilos.td}>{candidato.nombre}</td>
                        <td style={estilos.td}>{candidato.email}</td>
                        <td style={estilos.td}>{candidato.experiencia} años</td>
                        <td style={estilos.td}>
                            <a href={candidato.linkCV} target="_blank" rel="noopener noreferrer"
                               style={estilos.link}>Ver CV</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

// ESTILOS
    const estilos = {
        contenedor: {
            padding: "32px",
            backgroundColor: "#fff",
            borderRadius: "16px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            maxWidth: "900px",
            margin: "0 auto",
            fontFamily: "sans-serif"
        },
        titulo: {
            fontSize: "24px",
            marginBottom: "16px",
            fontWeight: "600"
        },
        tabla: {
            width: "100%",
            borderCollapse: "collapse"
        },
        th: {
            textAlign: "left",
            padding: "12px",
            borderBottom: "2px solid #e2e8f0",
            color: "#1e3a8a",
            fontSize: "14px"
        },
        td: {
            padding: "12px",
            borderBottom: "1px solid #f1f1f1",
            fontSize: "14px"
        },
        fila: {
            backgroundColor: "#fff",
            transition: "background-color 0.2s ease-in-out"
        },
        link: {
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: "500"
        }
    };