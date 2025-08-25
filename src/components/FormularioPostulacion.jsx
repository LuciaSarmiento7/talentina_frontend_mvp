import {useState} from "react";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const linkOk = (v) => /^https?:\/\/.+/.test(v);


export default function FormularioPostulacion({onAdd}) {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [experiencia, setExperiencia] = useState("");
    const [experiencia1, setExperiencia1] = useState("");
    const [skills, setSkills] = useState("");
    const [linkCV, setLinkCV] = useState("");
    const [error, setError] = useState("");
    const [enviando, setEnviando] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setError("");


        if (!nombre.trim()) return setError("El nombre es obligatorio.");
        if (!emailOk(email)) return setError("El email es inválido.");
        if (!linkCV.trim()) return setError("Por favor, agregue el link a su CV");
        if (!linkOk(linkCV)) return setError("El link es inválido.");

        setEnviando(true);
        try {
            const datos = {
                nombre: nombre.trim(),
                email: email.trim(),
                telefono: telefono.trim(),
                experiencia: Number(experiencia),
                experiencia1: experiencia1.trim(),
                skills: skills.split(",").map((s) => s.trim()).filter(Boolean),
                linkCV: linkCV.trim()
            };

            const res = await fetch("/api/candidato", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos),
            });

            if (res.ok) {
                const nuevo = await res.json();
                console.log("Candidato guardado:", nuevo);
                // podés mostrar mensaje de éxito, limpiar el form, etc.
            } else {
                console.error("Error al guardar candidato");
            }

            //esto limpia el formulario (si? creo..) osea lo settea todo en blanco
            setNombre("");
            setEmail("");
            setTelefono("");
            setExperiencia("");
            setExperiencia1("");
            setSkills("");
            setLinkCV("");
            console.log("Postulante (frontend):", datos);
        } catch (err) {
            setError("Ocurrió un error inesperado.");
        } finally {
            setEnviando(false);
        }
    };

    return (
        <div style={estilos.contenedor}>
            <form onSubmit={onSubmit} style={estilos.formulario}>
                <h2 style={estilos.titulo}>Formulario de Postulación</h2>

                {error && <div style={estilos.error}>{error}</div>}

                {/* NOMBRE */}
                <div style={estilos.campo}>
                    <label style={estilos.label}>Nombre *</label>
                    <input
                        style={estilos.input}
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ana Pérez"
                    />
                </div>

                {/* EMAIL */}
                <div style={estilos.campo}>
                    <label style={estilos.label}>Email *</label>
                    <input
                        style={estilos.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ana@mail.com"
                    />
                </div>

                {/* TELEFONO */}
                <div style={estilos.campo}>
                    <label style={estilos.label}>Telefono *</label>
                    <input
                        style={estilos.input}
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="+54 ..."
                    />
                </div>

                {/* AÑOS DE EXPERIENCIA */}
                <div style={estilos.campo}>
                    <label style={estilos.label}>Años de experiencia</label>
                    <input
                        style={estilos.input}
                        type="number" min="0" value={experiencia}
                        onChange={(e) => setExperiencia(e.target.value)}
                        placeholder="0"
                    />
                </div>

                {/* EXPERIENCIA TEXTO*/}
                <div style={estilos.campo}>
                    <label style={estilos.label}>Experiencia </label>
                    <textarea
                        style={estilos.textarea}
                        value={experiencia1}
                        onChange={(e) => setExperiencia1(e.target.value)}
                    />
                </div>

                {/* SKILLS */}
                <div style={estilos.campo}>
                    <label style={estilos.label}>Skills</label>
                    <input
                        style={estilos.input}
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder="React, Node, SQL"
                    />
                </div>

                {/* CV */}
                <div style={estilos.campo}>
                    <label style={estilos.label}>Link al CV *</label>
                    <input
                        style={estilos.input}
                        value={linkCV}
                        onChange={(e) => setLinkCV(e.target.value)}
                        placeholder="https://..."
                    />
                </div>

                {/* BOTON */}
                <div style={estilos.botonContenedor}>
                    <button
                        type="submit"
                        style={{
                            ...estilos.boton,
                            backgroundColor: enviando ? "#3b82f6" : "#1d4ed8"
                        }}
                        disabled={enviando}
                    >
                        {enviando ? "Enviando..." : "Guardar"}
                    </button>
                </div>
            </form>
        </div>
    );
}

const estilos = {
    contenedor: {
        maxWidth: "480px",
        margin: "0 auto",
        marginBottom: "30px",
        padding: "32px",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif"
    },
    formulario: {
        display: "flex",
        flexDirection: "column",
        gap: "20px"
    },
    titulo: {
        fontSize: "24px",
        fontWeight: "600",
        marginBottom: "10px"
    },
    campo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    label: {
        marginBottom: "6px",
        fontWeight: "500",
        fontSize: "14px"
    },
    input: {
        width: "94%",
        padding: "10px 12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "14px"
    },
    textarea: {
        width: "94%",
        minHeight: "50px",
        padding: "10px 12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "14px",
        resize: "none"
    },
    error: {
        color: "crimson",
    },
    botonContenedor: {
        display: "flex",
        justifyContent: "flex-end"
    },
    boton: {
        padding: "12px 24px",
        backgroundColor: "#1d4ed8",
        color: "#fff",
        fontWeight: "600",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
    }
};
