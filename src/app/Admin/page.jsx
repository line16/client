"use client";

import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import useRequestData from "../../../Hooks/useRequestData";
import { useEffect } from "react";
import Link from "react-router-dom";

const pageAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const {
    data: dataPUT,
    isLoading: isLoadingPUT,
    error: errorPUT,
    makeRequest: makeRequestPUT,
  } = useRequestData();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //Henter data
  useEffect(() => {
    makeRequest("http://localhost:5023/aboutus");
  }, []);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
    }
  }, [data]);

  //submit = send data til API
  const handleSubmit = (e) => {
    e.preventDefault();

    const newEdit = { title: title, content: content };

    makeRequestPUT("http://localhost:5023/aboutus/admin", "PUT", newEdit);
  };

  return (
    <div>
      <Navbar />

      <div className="m-auto text-center w-10/12 h-auto bg-gray-100 mt-8 rounded-md">
        <h1 className="text-black text-center font-bold text-3xl p-3">
          edit forside
        </h1>
        <p>Her kan du rette headlines og indhold på forsiden</p>

        {/* Beskeden når der er rettet data - PUT */}
        {dataPUT && (
          <div className="">
            <h2>Alt er rettet!</h2>
            <p>{dataPUT.about.title}</p>
            <p>{dataPUT.about.content}</p>
          </div>
        )}

        {data && (
          <form
            onSubmit={handleSubmit}
            className="m-auto flex flex-col justify-center w-4/6"
          >
            <label
              htmlFor="vibTitle"
              className="text-lg m-auto font-medium text-gray-800"
            >
              title
            </label>
            <input
              className="m-auto w-80 h-8 rounded-md p-1 bg-gray-200"
              type="text"
              required
              id="vibTitle"
              onInput={(e) => setTitle(e.target.value)}
              value={title}
            />

            <label htmlFor="" className="text-lg m-2 font-medium text-gray-800">
              indhold
            </label>
            <textarea
              type="text"
              required
              className="text-black m-auto w-5/6 h-80 rounded-md p-1 bg-gray-200"
              onInput={(e) => setContent(e.target.value)}
              value={content}
            />

            <button
            type="submit"
            className="w-44 h-8 bg-green-500 text-white rounded-md m-auto mt-10 mb-5"
          >Done
          </button>
          </form>
          
        )}
      </div>
    </div>
  );
};

export default pageAdmin;
