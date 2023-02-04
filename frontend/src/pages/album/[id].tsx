import { getLyricsFromAlbum } from "@/helpers/getFirebaseData";
import { NextPage } from "next";
import React from "react";
import { IAlbumContent } from "@/libs/interfaces";
import Layout from "@/components/layout/Layout";
import { getAlbums } from "@/api/data";
import AlbumLyrics from "@/components/UI/AlbumLyrics";

type Props = {
  selectedAlbum: IAlbumContent;
  id: string;
};

const AlbumPage: NextPage<Props> = ({ selectedAlbum, id }) => {
  const data = selectedAlbum?.songs;

  return (
    <Layout
      title={`${selectedAlbum.albumName} | ${selectedAlbum.artistName}`}
      content={`${selectedAlbum.albumName} | ${selectedAlbum.artistName}`}>
      <div className="px-20 mt-10">
        <AlbumLyrics data={data} id={id} />
      </div>
    </Layout>
  );
};

export default AlbumPage;

export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const { id } = params;

  const data = await getAlbums();

  const selectedAlbum = data.find((x: any) => x.id === id);

  return {
    props: {
      id,
      selectedAlbum,
    },
  };
};
