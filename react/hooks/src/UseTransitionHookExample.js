import { useEffect, useState, useTransition } from "react";

export const UseTransitionHookExample = () => {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await res.json();
      setPokemon(data.results);
      setFilteredPokemon(pokemon);
    };

    getPokemon();
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value.toLowerCase());
    startTransition(() => {
      setFilteredPokemon(
        e.target.value.length === 0
          ? pokemon
          : pokemon.filter((poke) =>
              poke.name.includes(e.target.value.toLowerCase()),
            ),
      );
    });
  };

  return (
    <div>
      <hr />
      <h4>Use Transition Hook Example</h4>
      <input type="text" onChange={handleInputChange} value={input} />
      <p>{input.length}</p>
      <p>{filteredPokemon.length}</p>
      <ul>
        {isPending && <p>Loading...</p>}
        {filteredPokemon.map((p, i) => (
          <div key={p + i}>
            <li>{p.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
