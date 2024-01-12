"use client";
import Link from "next/link";
import React from "react";
import Navbar from "../layout/Navbar";
import useRequestData from "../../../Hooks/useRequestData";
import { useEffect } from "react";
import Image from "next/image";

const Viborg = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const {
    data: dataImg,
    isLoading: isLoadingImg,
    error: errorImg,
    makeRequest: makeRequestImg,
  } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5023/aboutus");
  }, []);

  useEffect(() => {
    makeRequestImg("http://localhost:5023/services?limit=2");
  }, []);

  return (
    <div>
        <Navbar />
      {data && (
        <div className="m-auto w-10/12 bg-gray-300 p-3 ">
          
            <h1 className="font-bold text-5xl w-3/6 pl-7 py-4">
              Velkommen til <span className="text-green-500">Viborg Haveservice</span>
            </h1>
            <div className="flex flex-row justify-evenly">
              <div className="text-black w-3/6 float-left">
              <div dangerouslySetInnerHTML={{ __html: data.content }}/>       
                <div className="bg-green-500 w-44 p-2 rounded-md mt-20 text-white text-center">
                  <Link href="/Admin">SE ALLE YDELSER</Link></div>
              </div>

{/* --- image ---- */}
              {dataImg && dataImg.map((e) =>(
                <div className=" flex flex-row float-right">
                  <figure className="">
                    <Image
                      src={ "http://localhost:5023/images/" +  e.image}
                      width={250}
                      height={250}
                      alt="photo"
                    />
                    <h3 className="font-semibold p-1">{e.title}</h3>
                    <p className="w-60 p-1">{e.content}</p>
                  </figure>
                </div>
             )) }
{/* --- image END --- */}

            </div>
        </div>
      )}
    </div>
  );
};

export default Viborg;
