import React from "react";

export default function Description(props: { description: string }) {
  return (
    <div className="mt-4">
      <p className="text-lg font-light">{props.description}</p>
    </div>
  );
}
