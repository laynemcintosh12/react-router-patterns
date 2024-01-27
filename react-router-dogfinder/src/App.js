import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import RouteList from "./RouteList";
import NavBar from "./Navbar";

function App() {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:5001/dogs");
        setDogs({
          data: response.data,
          isLoading: false
        });
      } catch (error) {
        console.error("Error fetching dogs data:", error);
        setDogs({
          data: null,
          isLoading: false
        });
      }
    }

    fetchData();
  }, []);

  if (dogs.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Dog Finder</h1>
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <div>
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
