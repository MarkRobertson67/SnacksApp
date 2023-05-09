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
    <div style={{ position: 'relative', top: '-200px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div className="Snacks">
      <section>
        <table>
          <thead>
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
      </section>
    </div>
    </div>
  );
}

export default Snacks;