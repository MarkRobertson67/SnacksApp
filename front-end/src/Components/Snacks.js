import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
    .get(`${API}/snacks`)
    .then((response) => setSnacks(response.data))
    .catch((error) => console.warn("catch", error))
  }, []);

  return (
    <div className="container my-5">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark"> 
        {/* add columbs for is vegan and is halal */}
          <tr>
            <th>Favorite</th>
            <th>Snack</th>
            <th>See this snack</th>
          </tr>
        </thead>
        <tbody>
          {snacks.map((snack) => {
            return <Snack key={snack.id} snack={snack} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Snacks;