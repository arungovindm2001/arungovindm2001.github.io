import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Episode() {
  const { epId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchUrl() {
      const res = await axios.get(
        `https://gh-backend.onrender.com/api/v1/one-piece/${epId}`
      );
      setData(res.data[0]);
      console.log(res.data[0].url);
    }
    fetchUrl();
  }, [epId]);
  return (
    <div className="flex flex-col h-screen items-center gap-4">
      <h1 className="font-bold text-4xl">Episode {epId}</h1>
      {data ? (
        <>
          <iframe
            className="rounded-xl"
            width="60%"
            height="60%"
            title={data.title}
            src={data.url}
            frameborder="0"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          />
          <h2 className="text-justify px-32 text-xl">{data.description}</h2>
        </>
      ) : null}
    </div>
  );
}

export default Episode;
