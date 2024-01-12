"use client"

import React, {useEffect} from "react";
import Navbar from "../layout/Navbar";
import useRequestData from "../../../Hooks/useRequestData";
import Link from "next/link";

const review = () => {
    const { data, isLoading, error, makeRequest } = useRequestData();

    // const {
    //   data: dataImg,
    //   isLoading: isLoadingImg,
    //   error: errorImg,
    //   makeRequest: makeRequestImg,
    // } = useRequestData();
  
    useEffect(() => {
      makeRequest("http://localhost:5023/reviews");
    }, []);
  
    // useEffect(() => {
    //   makeRequestImg("http://localhost:5023/services?limit=2");
    // }, []);
  
  return (
    <div>
      <Navbar />
        <div id="kundeBg" className="w-5/6 bg-gray-300 h-auto m-auto p-3 rounded-sm">
            <div>
              <h1 className="font-bold text-center text-2xl m-2 text-white">  Se hvad folk siger om vores service</h1>
            </div>
            <div className="flex flex-row flex-wrap justify-start text-white">
                {data && data.map((r) =>(
                    <div key={r.id} className="m-2 card glass w-96 border-2 border-white rounded-md p-2">
                        <p className="pt-2 font-semibold">{r.author}</p>
                        <p className="m-2">{r.content}</p>
                    </div>
                ))}
            </div>

            <div  className="bg-green-400 w-44 h-10 text-center pt-2 rounded-md shadow-md hover:bg-green-600 m-3">
                <Link href="/ReviewCreate" >lav dit eget review</Link>
            </div>
        </div>
   
    </div>
  );
};

export default review;
