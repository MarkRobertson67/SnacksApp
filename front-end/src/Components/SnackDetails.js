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
    <div className="container">
      <h1>Your Choice Snack is....</h1>
      <article>
        <h3>{snack.is_favorite ? <span>⭐️</span> : null} {snack.name}</h3>
        <h5>
          <span>
            <a href={snack.url}>{snack.name}</a>
          </span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {snack.url}
        </h5>
        <h6>{snack.category}</h6>
        <p>{snack.description}</p>

        <div className="row">
          <div className="col-md-4">
            <Link to={`/snacks`} className="btn btn-primary">
              Back
            </Link>
          </div>
          <div className="col-md-4">
            <Link to={`/snacks/${id}/edit`} className="btn btn-primary">
              Edit
            </Link>
          </div>
          <div className="col-md-4">
            <button onClick={handleDeleteClick} className="btn btn-danger">
              Delete
            </button>
            {showConfirm && (
              <div className="confirm">
                <p>Are you sure you want to delete this deliciousness?</p>
                <button onClick={handleConfirmClick} className="btn btn-danger">
                  Yes
                </button>
                <button
                  onClick={handleCancelClick}
                  className="btn btn-secondary"
                >
                  No
                </button>
              </div>
            )}
          </div>
        </div>
      </article>
      <Reviews snack={snack} />
    </div>
  );

}

export default SnackDetails;
