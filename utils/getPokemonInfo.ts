import { pokeApi } from "../api";
import { Pokemon, Sprites } from "../interfaces";

interface PokemonInfo {
  id: number;
  name: string;
  sprites: Sprites;
}

export const getPokemonInfo = async (
  nameOrId: string
): Promise<PokemonInfo> => {
  const {
    data: { id: idPoke, name, sprites },
  } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

  return {
    id: idPoke,
    name,
    sprites,
  };
};
