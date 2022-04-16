import { FC } from "react";
import Head from "next/head";
import { NavBar } from "../UI";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}
const origin: string =
  (typeof window !== "undefined" && window.location.origin) || "";

export const Layout: FC<Props> = ({ children, title }) => {
  console.log({ origin });

  return (
    <>
      <Head>
        <title>{title || "PokemonApp"}</title>
        <meta name='author' content='Edwin Espinal' />
        <meta
          name='desciption'
          content={`Informacion sobre el pokemon:${title}`}
        />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />

        <meta property='og:title' content={`Informacion Sobre ${title}`} />
        <meta
          property='og:description'
          content={`Esta es la pagina sobre ${title}`}
        />
        <meta property='og:image' content={`${origin}/banner.png`} />
      </Head>

      <NavBar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
