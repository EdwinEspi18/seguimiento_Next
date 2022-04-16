import { FC } from "react";
import { Card, Grid } from "@nextui-org/react";

interface Props {
    id: number;
    handleClick: (id: number) => void
}


export const CardFavoritePokemon: FC<Props> = ({ id, handleClick }) => {
    const imageURL: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'
    return (
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } onClick={ () => handleClick(id) }>
            <Card hoverable clickable css={{padding: 10}}>
                <Card.Image src={`${imageURL}/${id}.svg`} alt='Pokemon' width={ '100%' } height={ 140 } />
            </Card>
        </Grid>
    )
}