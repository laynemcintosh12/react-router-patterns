import React from "react";
import { Link } from "react-router-dom";


function DogList({ dogs }) {
  return (
    <div className="DogList">
      <h2>Click on dogs below for more details!</h2>
      <div>
        {dogs.map(d => (
          <div key={d.name}>
            <img src={`/${d.src}.jpg`} alt={d.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;