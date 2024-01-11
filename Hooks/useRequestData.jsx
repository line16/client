
import React, {useState} from "react";
import axios from "axios";

const useRequestData = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    const makeRequest = async (url, method = "GET", bodydata = null, headers=null, params=null) => {
  
      setIsLoading(true)
  
      //Kalder API med GET POST PUT PATCH DELETE
      try {
        let response
  
        switch (method) {
          case "GET":
             response = await axios.get(url,{headers:headers, params: params});
            break;
            case "POST":
              response = await axios.post(url, bodydata, {headers:headers, params: params});
            break;
            case "PUT":
              response = await axios.put(url, bodydata, {headers:headers, params: params});
            break;
            case "PATCH":
              response = await axios.patch(url, bodydata, {headers:headers, params: params});
            break;
            case "DELETE":
              response = await axios.delete(url, {headers:headers, params: params});
            break;
        
          default:
            throw new Error("invalid method - GET POST PUT PATCH DELETE ")
        }
     
  
        if (response && response.data != undefined) {
          setData(response.data);
          setError(null);
        } else {
          throw new Error("Tomt response/ingen data");
        }
      } catch (error) {
        console.log(error);
        setError("Der er opstået en fejl: " + error.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };
  
    return { data, isLoading, error, makeRequest };
  };
  
  export default useRequestData;
  