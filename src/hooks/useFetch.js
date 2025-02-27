import { useEffect, useState } from "react";

export const useFetch = (endpoint, valorInicial = []) => {
  const [data, setData] = useState(valorInicial);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getData = fetch(endpoint);
    setTimeout(() => {
      getData
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch(() => setError({ status: 500, message: "Error en el servidor" }))
        .finally(() => setIsLoading(false));
    }, 2000);
  }, [endpoint]);

  return { data, isLoading, error };
};
