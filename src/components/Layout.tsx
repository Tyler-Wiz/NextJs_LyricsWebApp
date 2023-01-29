import Head from "next/head";
import React, { FC } from "react";
import Nav from "./Nav";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title className="capitalize">{`${title} - Plug By tooXclusive`}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex gap-2">
        <header className="w-[18%] fixed h-screen">
          <Nav />
        </header>
        <div className="w-[82%] relative left-[18%]">
          <main>{children}</main>
          <footer></footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
