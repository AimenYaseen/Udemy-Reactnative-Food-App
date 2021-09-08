import { useState, useEffect } from "react";
import Yelp from "../api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const searchApi = async (item) => {
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          term: item,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMsg("Something Bad Happens");
    }
  };
  // Call searchApi() only once
  // when component is first rendered on the screen
  useEffect(() => {
    searchApi("sushi");
  }, []);

  return [searchApi, errorMsg, results];
};
