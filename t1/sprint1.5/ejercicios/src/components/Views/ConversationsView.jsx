// src/components/Views/ConversationsView.jsx
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const ConversationsView = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [q, setQ] = useState(searchParams.get("q") || "");
    const [sort, setSort] = useState(searchParams.get("sort") || "asc");

    // Actualiza URL cuando cambian q o sort
    useEffect(() => {
        const params = {};
        if (q) params.q = q;
        if (sort) params.sort = sort;
        setSearchParams(params);
    }, [q, sort, setSearchParams]);

    // Simulación de filtrado/orden de conversaciones
    const conversaciones = [
        { id: 1, nombre: "Ana" },
        { id: 2, nombre: "Luis" },
        { id: 3, nombre: "Marta" },
    ]
        .filter(c => c.nombre.toLowerCase().includes(q.toLowerCase()))
        .sort((a, b) => (sort === "asc" ? a.nombre.localeCompare(b.nombre) : b.nombre.localeCompare(a.nombre)));

    return (
        <div>
            <h1>Conversaciones</h1>
            <div>
                <label>
                    Buscar:{" "}
                    <input value={q} onChange={e => setQ(e.target.value)} placeholder="Nombre" />
                </label>
                <label style={{ marginLeft: "1rem" }}>
                    Orden:{" "}
                    <select value={sort} onChange={e => setSort(e.target.value)}>
                        <option value="asc">Ascendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                </label>
            </div>
            <ul>
                {conversaciones.map(c => (
                    <li key={c.id}>
                        {c.nombre} (<a href={`/conversacion/${c.id}`}>Abrir</a>)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConversationsView;
