"use client"

import React from "react";
import Navbar from "../layout/Navbar";
import useRequestData from "../../../Hooks/useRequestData";
const pageAdmin = () => {

  return (
    <div className="bg-gray-400">
      <Navbar />
      
      <div className="m-auto text-center w-10/12 h-auto">
        <h1>edit forside</h1>
        
        <form action="" className="m-auto flex flex-col justify-evenly w-4/6">

            <label htmlFor="">title</label>
            <input
            className="bg-slate-300" type="text" />

            <label htmlFor="">indhold</label>
            <input type="text" />
        </form>
      </div>
    </div>
  );
};

export default pageAdmin;
