
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  let navigate = useNavigate();

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [snack, setSnack] = useState({
    name: "",
    description: "",
    is_vegan: "",
    is_halal: false,
    is_favorite: false,
    created_date: null,
  });

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, is_favorite: !snack.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={snack.category}
          placeholder="super spicy, little spicy, ..."
          onChange={handleTextChange}
        />
        
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="text"
          name="rating"
          value={snack.rating}
          // placeholder="Zero to 5"
          onChange={handleTextChange}
        />

        <label htmlFor="calories">Calories:</label>
        <input
          id="calories"
          type="text"
          name="calories"
          value={snack.calories}
          onChange={handleTextChange}
        />

        <label htmlFor="is_vegan">Is vegan:</label>
        <input
          id="is_vegan"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={snack.is_vegan}
        />

        <label htmlFor="is_halal">Is Halal:</label>
        <input
          id="is_halal"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={snack.is_halal}
        />

        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={snack.is_favorite}
        />

        <br />
        <input type="submit" />
        <Link to={`/snacks`}>
        <button>Nevermind!</button>
      </Link>
      </form>
    </div>
  );
}

export default SnackNewForm;