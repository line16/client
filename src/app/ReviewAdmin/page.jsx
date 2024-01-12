"use client";
import React from "react";
import useRequestData from "../../../Hooks/useRequestData";
import { useEffect } from "react";
import Navbar from "../layout/Navbar";
import Link from "next/link";

const ReviewAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  // data DELETE
  const {
    data: dataDelete,
    isLoading: isLoadingDelete,
    error: errorDelete,
    makeRequest: makeRequestDelete,
  } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5023/reviews");
  }, []);

  const handleDelete = (reviewID, reviewAuthor) =>{
    if (window.confirm("du sletter " + reviewAuthor)) {
        makeRequestDelete("http://localhost:5023/reviews/admin/" + reviewID, "DELETE");
    }
  }

  return (
    <div>
      <Navbar />
      <h1 className="font-bold text-3xl text-center m-4">Admin for Reviews</h1>
      {/* ---- */}
      <div className="overflow-x-auto">
    

      <table className="table text-black m-auto bg-green-100 rounded-md shadow-md w-10/12 h-auto">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th className="text-black">
              <Link href="/ReviewCreate">
              </Link>
            </th>
          </tr>
          <tr>
            <th>Id</th>
            <th>Navn</th>
            <th>Review</th>
            <th>Ret</th>
            <th>Slet</th>
          </tr>
        </thead>
        <tbody className="m-auto rounded-md p-3">
          {data &&
             data.map((p) => (
              <tr className="border-green-200 border-2 py-3 px-6 rounded-md m-3" key={p._id}>
                <td className="py-3 px-6">{p._id}</td>
                <td className="py-3 px-6">{p.author}</td>
                <td className="py-3 px-6">{p.content}</td>
                <td className="py-3 px-6">
                  edit
                </td>
                <td className="py-3 px-6">
                  <button className="btn btn-neutral" onClick={() => handleDelete(p._id, p.author)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>

     </div>
  );
};

export default ReviewAdmin;
