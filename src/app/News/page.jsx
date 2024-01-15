"use client";
import React, { useState, useEffect } from "react";
import NEWSNavbar from "../layout/NEWSnavbar";
import useRequestData from "../../../Hooks/useRequestData";
import Link from "next/link";

const NewsHomePage = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [searchKey, setSearchKey] = useState("AI");

  const [language, setLanguage] = useState("en");

  const [ sortBy, setSortBy ] = useState("popularity");

  useEffect(() => {
    handleSearch();
  }, [language, sortBy]);

  const handleSearch = (e) => {
    makeRequest(
      "https://newsapi.org/v2/everything?q=" +
        searchKey +
        "&pageSize=50&language=" +
        language +
        "&sortBy=" +
        sortBy +
        "&apiKey=9d7094e527bb4c40a90b88a3052e46b4",
      "GET"
    );
  };

  const handleSearchKeyUp = (e) => {
    if (e.key === "Enter" || e.code === "Enter") handleSearch();
  };

  return (
    <div className="bg-white h-auto">
      <NEWSNavbar />
      <h1 className="text-black m-auto text-center text-4xl font-bold p-3">News</h1>

      {/* --- Søgning emne --- */}
      <div className="m-auto text-center w-4/12">
        <input
          type="search"
          onKeyUp={(e) => handleSearchKeyUp(e)}
          onChange={(e) => setSearchKey(e.target.value)}
          value={searchKey}
          placeholder="søg sprog"
          className="bg-gray-200 text-black rounded-md text-center p-1 m-2 shadow-md "
        />
        {/* ---- søg sprog ---- */}
        <select
          className="bg-gray-200 text-black rounded-md text-center p-1 m-2 shadow-md"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
        >
          <option value="ar">arabisk</option>
          <option value="en">engelsk</option>
          <option value="fr">fransk</option>
          <option value="de">tysk</option>
        </select>

        {/* --- søg relevans --- */}
        <select
          className="bg-gray-200 text-black rounded-md text-center p-1 m-2 shadow-md"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
        >
          <option value="relevancy">Relevancy</option>
          <option value="popularity">popularity</option>
          <option value="publishedAt">published At</option>
        </select>
      </div>

      {data &&
        data.articles.map((n) => (
          <div
            className="w-5/12 m-auto justify-evenly flex flex-col p-3"
            key={n.url}
          >
            <div className="bg-gray-300 p-5 rounded-lg flex flex-col justify-center shadow-md">
              <figure className="m-auto p-2">
                <img src={n.urlToImage} alt="pics" width={450} />
              </figure>

              <h2 className="font-semibold text-gray-600 text-lg m-2">
                {n.title}
              </h2>
              <p className="text-gray-500 font-light text-sm ml-2">
                {n.author}
              </p>
              <p className="text-gray-600 m-2">{n.description}</p>

              <div className="m-auto text-center bg-blue-200 w-80 rounded-md p-2 mt-4 hover:bg-gray-500">
                <button className="text-black">
                  <Link href={n.url} target="_blank">
                    {" "}
                    læs mere!
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default NewsHomePage;
