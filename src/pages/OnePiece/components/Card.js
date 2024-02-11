import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link
      to={`/one-piece/${props.num}`}
      className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-yellow-700 ease-in duration-150"
    >
      <div className="py-2">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.num}
        </h5>
      </div>
    </Link>
  );
}
