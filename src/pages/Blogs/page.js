import React, { useEffect, useState } from 'react';
import Card from './components/Card';

export default function Blogs() {
  const date = new Date();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40arungovindm',
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(({ items }) => {
        setBlogs(items);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="lg:mx-56 h-dvh flex flex-col gap-12">
      {blogs ? (
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-4xl font-bold">Blogs</h1>
          <div className="text-lxl font-light space-x-2">
            <span>
              {date.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            <span>&bull;</span>
            <span>{blogs.length + ' blogs'}</span>
          </div>
          {blogs.map(({ title, categories, pubDate }, index) => (
            <Card
              key={index}
              title={title}
              categories={categories}
              date={pubDate}
            />
          ))}
        </div>
      ) : (
        <div className='flex flex-col h-screen justify-center items-center'>Loading my blogs...</div>
      )}
    </div>
  );
}
