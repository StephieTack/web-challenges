import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  function handleNext() {
    setPage(page + 1);
  }

  function handlePrevious() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  return (
    <main>
      {/* Button nur anzeigen, wenn page > 0 */}
      {page > 0 && (
        <button onClick={handlePrevious} type="button">
          Previous Page
        </button>
      )}
      <button onClick={handleNext} type="button">
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
