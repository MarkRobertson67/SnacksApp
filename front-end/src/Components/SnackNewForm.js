
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    category: "",
    rating: "",
    calories: "",
    is_vegan: false,
    is_halal: false,
    is_favorite: false,
  });


  
  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/snacks/:{id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };


  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    console.log(event.target.id)
    setSnack({ ...snack, [event.target.id]: !snack[event.target.id] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };

  
  return (
    <div className="container my-5">
      <h1 className="text-center"
        style={{
          textAlign: "center",
          fontFamily: "Comic Sans MS, cursive",
          background: 'linear-gradient(to right, blue, red)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Add a New Snack</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                className="form-control"
                value={snack.name}
                type="text"
                onChange={handleTextChange}
                placeholder="Name of Snack"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input
                id="category"
                className="form-control"
                type="text"
                name="category"
                value={snack.category}
                placeholder="super spicy, little spicy, ..."
                onChange={handleTextChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <input
                id="rating"
                className="form-control"
                type="number"
                name="rating"
                value={snack.rating}
                placeholder="Zero to 5"
                onChange={handleTextChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="calories">Calories:</label>
              <input
                id="calories"
                className="form-control"
                type="number"
                name="calories"
                placeholder="Guestimate if not sure"
                value={snack.calories}
                onChange={handleTextChange}
              />
            </div>
          </div>
        </div>

        <div className="form-group form-check">
          <input
            id="is_vegan"
            className="form-check-input"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={snack.is_vegan}
          />
          <label htmlFor="is_vegan" className="form-check-label">
            Is vegan
          </label>
        </div>

        <div className="form-group form-check">
          <input
            id="is_halal"
            className="form-check-input"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={snack.is_halal}
          />
          <label htmlFor="is_halal" className="form-check-label">
            Is Halal
          </label>
        </div>

        <div className="form-group form-check">
          <input
            id="is_favorite"
            className="form-check-input"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={snack.is_favorite}
          />
          <label htmlFor="is_favorite" className="form-check-label">
            Favorite
          </label>
        </div>

        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to={`/snacks`} className="btn btn-secondary ml-2">
          Nevermind!
        </Link>
      </form>
    </div>
  );

}

export default SnackNewForm;