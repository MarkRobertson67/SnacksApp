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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        marginTop: "-100px",
      }}
    >
      <div className="container mt-4">
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th></th>
              <th>Take me there</th>
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
    </div>
  );
}

export default Snacks;