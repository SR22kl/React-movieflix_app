import React, { useContext, useEffect, useState } from "react";

// import useFetch from "./useFetch";

export const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
// const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=batman`

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [movie, setMovie] = useState([])
  const [isError, setIsError] = useState({ show: "false", msg: "Error" })
  const [query, setQuery] = useState("");

  const getMovies = async (url) => {
    setisLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setisLoading(false);
        setIsError({
          show: false,
          msg: " ",
        });
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,

        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);

    }, 500);

    return () => clearTimeout(timeOut);
  }, [query])

  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>

  )

};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext }

