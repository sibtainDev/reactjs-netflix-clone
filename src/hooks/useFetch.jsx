import React, { useEffect, useState } from "react";
import { fetchMovies } from "../utils/api";
const useFetch = (url) => {
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Loading...");
    setData(null);
    setError(null);

    fetchMovies(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((res) => {
        setLoading(false);
        setData(false);
        setError("some thing went wrong");
      });
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
