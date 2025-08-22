'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav style={estilos.nav}>
            <Link
                href="/tabla"
                style={pathname === '/tabla' ? estilos.botonActivo : estilos.boton}
            >
                Tabla de candidatos
            </Link>

            <Link
                href="/formulario"
                style={pathname === '/formulario' ? estilos.botonActivo : estilos.boton}
            >
                Formulario
            </Link>
        </nav>
    );
}

const estilos = {
    nav: {
        display: "flex",
        gap: "12px",
        marginBottom: "24px",
        padding: "16px",
        borderBottom: "1px solid #ccc",
    },
    boton: {
        padding: "10px 16px",
        backgroundColor: "#e5e7eb",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "500",
        textDecoration: "none",
        color: "#000",
    },
    botonActivo: {
        padding: "10px 16px",
        backgroundColor: "#1d4ed8",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "600",
        textDecoration: "none",
    },
};