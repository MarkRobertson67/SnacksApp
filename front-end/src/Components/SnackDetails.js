import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Reviews from "./Reviews";

const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
  const [snack, setSnack] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);

  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => {
        console.log(response.data);
        setSnack(response.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, [id]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleCancelClick = () => {
    setShowConfirm(false);
  };

  const handleConfirmClick = () => {
    deleteSnack();
    setShowConfirm(false);
  };



  return (
    <div className="container text-center mt-4">
  <h1 className="text-center"
        style={{
          textAlign: "center",
          fontFamily: "Comic Sans MS, cursive",
          background: 'linear-gradient(to right, blue, red)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Your Choice Snack is....</h1>
  <article>
    <h3>
      {snack.is_favorite ? <span>⭐️</span> : null} {snack.name}
    </h3>
    {/* <h5>
      <span>
        <a href={snack.url}>{snack.name}</a>
      </span>{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {snack.url}
    </h5> */}
    <h6>{snack.category}</h6>
    <p>Rating: {snack.rating} out of 5</p>
    <p>Calories: {snack.calories}</p>
    <p>{snack.is_vegan}</p>
    <p>{snack.is_halal}</p>
    {snack.photo && (
  <img
    src={`${snack.photo}`}
    alt={snack.name}
    style={{ width: "200px", height: "200px" }}
  />
)}

    <div className="row text-center">
      <div className="col-md-4 mx-auto">
        <Link to={`/snacks`} className="btn btn-primary btn-sm">
          Back
        </Link>
        <Link to={`/snacks/${id}/edit`} className="btn btn-primary btn-sm">
          Edit
        </Link>
        <button onClick={handleDeleteClick} className="btn btn-danger btn-sm">
          Delete
        </button>
        {showConfirm && (
          <div className="confirm">
            <p>Are you sure you want to delete this deliciousness?</p>
            <button onClick={handleConfirmClick} className="btn btn-danger btn-sm">
              Yes
            </button>
            <button onClick={handleCancelClick} className="btn btn-secondary btn-sm">
              No
            </button>
          </div>
        )}
      </div>
    </div>
  </article><br />
  <Reviews snack={snack} />
</div>

  );
}

export default SnackDetails;
