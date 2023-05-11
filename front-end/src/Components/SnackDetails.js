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

  //delete

  // const handleDelete = () => {
  //   deleteSnack();
  // }

  return (
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

      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/snacks`}>
            <button>Back</button>
          </Link>
        </div>

        <div>
          <Link to={`/snacks/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>

        <div>
          <button onClick={handleDeleteClick}>Delete</button>
          {showConfirm && (
            <div>
              <p>Are you sure you want to delete this deliciousness ?</p>
              <button onClick={handleConfirmClick}>Yes</button>
              <button onClick={handleCancelClick}>No</button>
            </div>
          )}
        </div>
      </div>
      <Reviews snack={snack} />
    </article>
  );
}

export default SnackDetails;
