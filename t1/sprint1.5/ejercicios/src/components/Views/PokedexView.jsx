// src/components/Views/PokedexView.jsx
import React, { useState, useEffect } from "react";

const PokedexView = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
                if (!res.ok) throw new Error(`Error en la API: ${res.status}`);
                const data = await res.json();
                setPokemonList(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, []);

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Pokédex</h1>

            {loading && <p>Cargando Pokémon...</p>}

            {error && (
                <div style={{ color: "red", marginTop: "1rem" }}>
                    <p>Error al cargar la Pokédex:</p>
                    <p>{error}</p>
                </div>
            )}

            {!loading && !error && (
                <ul>
                    {pokemonList.map((pokemon, idx) => (
                        <li key={idx}>{pokemon.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PokedexView;
