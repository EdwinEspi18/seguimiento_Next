import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import { FC } from 'react'
import NextLink from "next/link";
import Logo from "../../public/pokeapi_256.3fa72200.png";
export const NavBar: FC = () => {

    const { theme } = useTheme()
return(
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray900.value
    }}>
        <NextLink href='/' passHref>
            <Link>
        <Image src={ Logo } alt='icono de la app' width={70} height={30} /> 
                <Text color='white' h2>P</Text>
                <Text color='white' h3>okemon</Text>
            </Link>
        </NextLink>
        <Spacer css={{flex: 1}} />
        <NextLink href='/favoritos'>
            <Link>
                <Text color='white' h3>Favoritos</Text>
            </Link>
        </NextLink>
       
    </div>
)
}