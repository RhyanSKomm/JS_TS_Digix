import React, { useState } from "react";
import styles from "./CSSModules/PerfilUsuario.module.css";

export default function PerfilUsuario({ imagem, nome, bio }) {
    const [nomeEditado, setNomeEditado] = useState(nome);
    const [bioEditada, setBioEditada] = useState(bio);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nome: ${nomeEditado}\nBio: ${bioEditada}`);
    };

    return (
        <div className={styles.perfil}>
            <img src={imagem} alt="Foto de perfil" />

            <h2 className={styles.tituloNome}>{nomeEditado}</h2>

            <p className={styles.bio}>{bioEditada}</p>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    type="text"
                    value={nomeEditado}
                    onChange={(e) => setNomeEditado(e.target.value)}
                    placeholder="Editar nome"
                    className={styles.input}
                />
                <textarea
                    value={bioEditada}
                    onChange={(e) => setBioEditada(e.target.value)}
                    placeholder="Editar bio"
                    className={styles.textarea}
                />
                <button type="submit" className={styles.botao}>
                    Salvar
                </button>
            </form>
        </div>
    );
}
