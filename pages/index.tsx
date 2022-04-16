import { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPoke } from '../interfaces';
import { PokemonCard } from '../components/pokemons';
import { Layout } from '../components/layouts';
import { Grid } from "@nextui-org/react";

interface Props {
  pokemons: SmallPoke[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <>
    <Layout title='Listado de pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
       { pokemons.map( (pokemon) => ( 
         <PokemonCard key={pokemon.id} { ...pokemon } />
        ) ) }
    </Grid.Container>
    </Layout>
    </>
  )
}



export const getStaticProps: GetStaticProps = async (ctx) =>  {
  const imageURL: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world'

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons: SmallPoke[] = data.results.map((dat, i) => ({ ...dat, id: i+1, image:`${imageURL}/${i+1}.svg`  }))

  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}

export default HomePage;
