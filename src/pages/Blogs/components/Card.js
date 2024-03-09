import React from 'react'
import { Link } from 'react-router-dom';

function Card({ title, categories, date}) {
  const formattedDate = new Date(date);
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return (
    <Link to={`/blogs/${title}`} className="flex flex-col gap-3 my-4 w-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 duration-300">
      <span className="font-bold text-xl">{title}</span>
      <div>
        {categories.map((category, index) => (
          <span
            key={index}
            className="border rounded-xl font-light mr-2 p-1.5 uppercase"
          >
            {category}
          </span>
        ))}
      </div>
      <div className="flex flex-row gap-4 font-light">
        <span>{formattedDate.toLocaleDateString('en-GB', options)}</span>
      </div>
    </Link>
  );
}

export default Card