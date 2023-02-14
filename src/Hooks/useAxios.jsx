import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = import.meta.env.VITE_API_ADRESS;

export const useAxios = (axiosParams, pageId) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  console.log(axiosParams);

  const fetchData = async (params) => {
    setLoading(true);
    try {
      const result = await axios.request(params);
      setResponse(result.data);
      // console.log(result.data);
    } catch (err) {
      setError(err);
      // console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, [pageId]); // execute once only

  return { response, error, loading };
};
