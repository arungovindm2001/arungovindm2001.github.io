import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

function HomePage() {
  const [episodesData, setEpisodesData] = useState([]);
  const [arc, setArc] = useState("egghead");

  useEffect(() => {
    async function fetchData() {
      console.log(arc);
      const eps = await axios.get(
        `https://gh-backend.onrender.com/api/v1/one-piece/arc/${arc}`
      );
      setEpisodesData(eps.data);
    }
    fetchData();
  }, [arc]);

  // const { images, synopsis } = animeData.data;
  // const image_url = images.jpg.image_url;

  return (
    <div className="space-y-8 px-6 pb-4">
      <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
        <img
          className="rounded-md"
          src="https://cdn.myanimelist.net/images/anime/1244/138851.jpg"
          width={250}
          height={250}
          alt="One Piece Pic"
        />
        <div className="flex flex-col gap-y-4 px-6">
          {/* <h1 className="text-5xl font-RedHat font-bold">ONE PIECE</h1> */}
          <h2 className="text-xl text-justify">
            Barely surviving in a barrel after passing through a terrible
            whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship
            under attack by fearsome pirates. Despite being a naive-looking
            teenager, he is not to be underestimated. Unmatched in battle, Luffy
            is a pirate himself who resolutely pursues the coveted One Piece
            treasure and the King of the Pirates title that comes with it.{" "}
            <br />
            The late King of the Pirates, Gol D. Roger, stirred up the world
            before his death by disclosing the whereabouts of his hoard of
            riches and daring everyone to obtain it. Ever since then, countless
            powerful pirates have sailed dangerous seas for the prized One Piece
            only to never return. Although Luffy lacks a crew and a proper ship,
            he is endowed with a superhuman ability and an unbreakable spirit
            that make him not only a formidable adversary but also an
            inspiration to many.
            <br />
            As he faces numerous challenges with a big smile on his face, Luffy
            gathers one-of-a-kind companions to join him in his ambitious
            endeavor, together embracing perils and wonders on their
            once-in-a-lifetime adventure.
          </h2>
        </div>
      </div>
      <select
        defaultValue="egghead"
        className="bg-primary border-none text-3xl"
        onChange={(event) => setArc(event.target.value)}
      >
        <option className="text-xl" value="wano">
          Wano
        </option>
        <option className="text-xl" value="egghead">
          Egghead
        </option>
      </select>
      <div className="grid grid-cols-12 gap-8">
        {episodesData.length > 0 ? (
          episodesData.map((episode) => (
            <>
              <Card
                key={episode.num}
                num={episode.num}
                title={episode.title}
                description={episode.description}
              />
            </>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
