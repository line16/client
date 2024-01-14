"use client";

import React, { useState, useEffect } from "react";
import useRequestData from "../../../Hooks/useRequestData";
import Navbar from "../layout/Navbar";
import { useParams } from "react-router-dom";

const ReviewEdit = (params) => {

  const ReviewID = params.searchParams.id

  console.log(params)

  const { data, isLoading, error, makeRequest } = useRequestData();

  const {
    data: dataPUT,
    isLoading: isLoadingPUT,
    error: errorput,
    makeRequest: makeRequestPUT,
  } = useRequestData();

  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    makeRequest("http://localhost:5023/reviews/" + ReviewID);
  }, []);

  useEffect(() => {
    if (data) {
      setAuthor(data.author);
      setContent(data.content);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = { author: author, content: content};

    makeRequestPUT(
      "http://localhost:5023/reviews/admin/" + ReviewID,
      "PUT",
      newReview
    );
  };

  return (
    <div>
      <Navbar />
      {data && (
        
        <h1 className="text-center m-2 text-2xl font-bold">Vil du rette {data.author} review?</h1>
      )}
      <div>
        {data && (
          <form
            onSubmit={handleSubmit}
            className="m-auto flex flex-col justify-center w-4/6 bg-green-50 rounded-lg shadow-lg"
          >
            <label
              htmlFor="vibTitle"
              className="text-lg m-auto font-medium text-gray-800"
            >
              Navn
            </label>
            <input
              className="m-auto w-80 h-8 rounded-md p-2 bg-gray-200 shadow-md"
              type="text"
              required
              id="vibTitle"
              onInput={(e) => setAuthor(e.target.value)}
              value={author}
            />

            <label htmlFor="" className="text-lg m-2 font-medium text-gray-800 text-center">
              indhold
            </label>
            <textarea
              type="text"
              required
              className="text-black m-auto w-9/12 h-80 rounded-md p-2 bg-gray-200 shadow-md"
              onInput={(e) => setContent(e.target.value)}
              value={content}
            />
            
            <p className="text-center bg-gray-200 w-6/12 mx-auto my-4 rounded-md shadow-md">personligt Id : {data._id}</p>

            <button
              type="submit"
              className="w-44 h-8 bg-green-500 text-white rounded-md m-auto mt-10 mb-5"
            >
              Done
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ReviewEdit;
