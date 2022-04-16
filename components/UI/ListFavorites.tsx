import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { CardFavoritePokemon } from "./CardFavoritePokemon";


interface Props {
    favoritesPokemon: number[];
}

export const ListFavorites: FC<Props> = ( { favoritesPokemon } ) => {
    const imageURL: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'
    const router = useRouter()

    const handleClick = ( id: number ): void => {
        router.push(`/pokemon/${id}`)
    }
    return (
        <Grid.Container gap={2} direction='row' justify="flex-start">
            {
                favoritesPokemon.map( id => (<CardFavoritePokemon handleClick={handleClick} id={ id } key={ id } />) )
            }
        </Grid.Container>
    )
}