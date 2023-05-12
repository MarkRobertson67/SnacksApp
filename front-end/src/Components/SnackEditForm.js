import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
  let { id } = useParams();
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

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(
        () => {
          navigate(`/snacks/${id}`);
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

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(
      (response) => setSnack(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSnack(snack, id);
  };


  return (
    <div className="Edit">
      <h1>Edit this Snack</h1>
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
        <Link to={`/snacks/${id}`} className="btn btn-secondary ml-2">
          Nevermind!
        </Link>
      </form>
    </div>
  );

}

export default SnackEditForm;