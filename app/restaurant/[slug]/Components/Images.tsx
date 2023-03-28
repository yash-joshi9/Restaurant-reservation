import React from "react";

export default function Images(props: { images: string[] }) {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {props.images.length} photo(s)
      </h1>
      <div className="flex flex-wrap">
        {props.images.map((img) => (
          <img className="w-56 h-44 mr-1 mb-1" src={img} alt="" />
        ))}
      </div>
    </div>
  );
}
