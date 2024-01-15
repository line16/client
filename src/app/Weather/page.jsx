"use client";
import React, { useEffect, useState } from "react";
import useRequestData from "../../../Hooks/useRequestData";
import { FaLongArrowAltRight } from "react-icons/fa";
import WeatherNav from "../layout/WeatherNav";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const weather = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const {
    makeRequest: makeRequestDawa,
    isLoading: isLoadingDawa,
    data: dataDawa,
    error: errorDawa,
  } = useRequestData();

  const [zip, setZip] = useState("4130");
  const [valid, setValid] = useState(true);

  //   const position = [51.505, -0.09]

  useEffect(() => {
    searchZipCode();
  }, []);

  const searchZipCode = (e) => {
    if (valid) {
      makeRequest(
        "https://api.openweathermap.org/data/2.5/weather?zip=" +
          zip +
          ",dk&units=metric&appid=76799082ae1442b626cf882793217343",
        "GET"
      );
    }
  };

  const handleSearchKeyUp = (e) => {
    if (e.key === "Enter" || e.code === "Enter") searchZipCode();
  };

  useEffect(() => {
    makeRequestDawa(
      "https://api.dataforsyningen.dk/postnumre/autocomplete?q=" + zip
    );
  }, [zip]);

  return (
    <div className="bg-white h-auto m-auto">
      <WeatherNav />

      <div className="m-auto">
        {/* // udtræk vejret, tempo, vindhastighed/-retning, sol op/ned osv.. */}
        <h1 className="text-black text-lg text-center">
          vejret fra udvalgt by - Leaflet
        </h1>

        <div className="flex flex-col justify-center text-center">
        <input
          type="search"
          value={zip}
          name="zipCode"
          onChange={(e) => {
            setZip(e.target.value);
            setValid(e.target.checkValidity());
          }}
          onKeyUp={(e) => handleSearchKeyUp(e)}
          placeholder="postnummer"
          className="m-auto mt-3 p-2 text-center bg-gray-300 text-black rounded shadow-md w-2/12"
          required
          pattern="{0-9}{4}"
          list="listPostNr"
          
        />

        <datalist id="listPostNr" className="m-auto text-center">
          {dataDawa?.map((d) => (
            <option value={d.postnummer.nr} key={d.postnummer.nr}>
              {d.tekst}
              {d.by}
            </option>
          ))}
        </datalist>
        </div>

        {data && (
          <article className="card w-98 shadow-xl py-4 text-black text-center m-auto">
            <div className="card-body">
              <h2 className="card-title mx-auto">vejret for {data.name}</h2>
              <ul>
                <li>temperatur:{Math.round(data.main.temp)}&deg;C</li>
                <li>vindhastighed {data.wind.speed} m/sek</li>
                <li className="m-auto text-center">
                  vindretning {data.wind.deg}
                  {/* <FaLongArrowAltRight
                    style={{ transform: "rotate(" + data.wind.deg + "deg)" }}
                  /> */}
                </li>
                <li>
                  solen står op:{" "}
                  {new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </li>
                <li>
                  solen går ned:{" "}
                  {new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </li>
              </ul>
            </div>

            <MapContainer
              className="MapContainer"
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker> */}
            </MapContainer>
          </article>
        )}
      </div>
    </div>
  );
};

export default weather;
