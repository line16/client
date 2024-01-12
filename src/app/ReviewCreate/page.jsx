"use client";

import React from "react";
import useRequestData from "../../../Hooks/useRequestData";
import Navbar from "../layout/Navbar";
import { useEffect, useState } from "react";

const ReviewCreate = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();

    const NewReview = {author, content}

    makeRequest("http://localhost:5023/reviews/admin", "POST", NewReview)
  };

  return (
    <div >
      <Navbar />

      <div className="bg-slate-200 m-auto p-5 flex flex-col justify-center rounded-sm">
        <h1 className="text-center text-2xl font-semibold p-3">
          Lav et review til os
        </h1>
        {data && (

        <form onSubmit={handleSubmit} className="m-auto w-72 text-center">
          <label htmlFor="revAuthor">Navn</label>
          <input
            className="text-gray-600 m-2 w-80 h-8 rounded-md text-left p-1"
            type="text"
            id="revAuthor"
            required
            placeholder="author"
            onInput={(e) => setAuthor(e.target.value)}
            value={author}
          />

          {/* ---- */}
          <label htmlFor="revContent">Indhold</label>
          <textarea
            className="text-gray-600 m-2 w-96 h-28 rounded-md text-left p-1"
            type="text"
            id="revContent"
            placeholder="indhold"
            onInput={(e) => setContent(e.target.value)}
            value={content}
          />
        </form>
        )}
        <button type="submit" className="w-44 h-8 bg-green-400 rounded-md m-auto">færdig</button>
      </div>
    </div>
  );
};

export default ReviewCreate;
