import React from "react";
import { CiStar } from "react-icons/ci";
export default function Book({ book }) {
  const { bookId, bookName, author, image, rating, tags, category } = book;
  return (
    <div className="border border-gray-200 flex flex-col gap-2 p-5 rounded-xl">
      <figure className="bg-gray-300  py-10 rounded-xl">
        <img className="w-32 h-48 mx-auto" src={image} alt="" />
      </figure>
      <div className="flex gap-3">
        <span className="bg-primary2 p-2 rounded-full text-primary">
          {tags[0]}
        </span>
        <span className="bg-primary2 p-2 rounded-full text-primary">
          {tags[1]}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-bold">{bookName}</h3>
      <p className="text-para flex-grow">By: {author}</p>
      <hr className="text-gray-200" />
      <div className="flex justify-between">
        <p className="text-para">{category}</p>
        <div className="flex gap-1 items-center">
          <span>{rating}</span>
          <CiStar className="text-lg" />
        </div>
      </div>
    </div>
  );
}
