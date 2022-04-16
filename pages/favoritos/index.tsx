import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { ListFavorites } from "../../components/UI/ListFavorites";
import { NoFavorites } from "../../components/UI/NoFavorties";
import { pokemons } from "../../utils";

const FavoritosPage: NextPage = () => {
    const [favoritePokemons, setFavoritePokemon] = useState<number[]>( [] )

    useEffect( () => {
        setFavoritePokemon( pokemons() )
    }, [] )
    return (
        <Layout title="Pokemon - Favoritos">
            { favoritePokemons.length !== 0 ? <ListFavorites favoritesPokemon={favoritePokemons} /> : <NoFavorites /> }
        </Layout>
    )
}

export default FavoritosPage