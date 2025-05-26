import React from "react";

export default function Mensagem({cor, texto}) {
    return (
        <p style={{color: cor, fontSize: "20px"}}>{texto}</p>
    );
}