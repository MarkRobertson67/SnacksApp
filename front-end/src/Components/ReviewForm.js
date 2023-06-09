import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ReviewForm(props) {
  
  const { id } = useParams();
  const { reviewDetails } = props;
  
  const [reviews, setReviews] = useState([]);

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    snack_id: id,
    is_favorite: false,
  })

  const handleTextChange = (event) => {
setReview({...review, [event.target.id]: event.target.value})
  }

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails)
    }
  }, [id, reviewDetails, props ])

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(review, id);
    window.location.reload(false)
    
    if (reviewDetails) {
      props.toggleView()
    }
    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      snack_id: id,
      is_favorite: false,
    })
  }

  const [snack, setSnack] = useState({
    name: "",
    category: "",
    rating: "",
    calories: "",
    is_vegan: false,
    is_halal: false,
    is_favorite: false,
  });

  const handleCheckboxChange = (event) => {
    // console.log(event.target.id)
    setSnack({ ...snack, [event.target.id]: !snack[event.target.id] });
  };

const handleAdd = (newReview) => {
    axios
      .post(`${API}/snacks/${id}/reviews`, newReview)
      .then(
        (response) => {
          setReviews([response.data, ...reviews]);
        },
        (error) => console.error(error)
      )
      .catch((e) => console.warn("catch", e));
  };


  const handleNevermind = () => {
    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      snack_id: id,
      is_favorite: false,
    });
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
        Add a New Review</h1>
      <div className="row justify-content-center"> {/* Center the row */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="reviewer">Name:</label>
              <input
                id="reviewer"
                className="form-control"
                value={review.reviewer}
                type="text"
                onChange={handleTextChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                id="title"
                className="form-control"
                placeholder="Give your review a title"
                type="text"
                required
                value={review.title}
                onChange={handleTextChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <input
                id="rating"
                className="form-control"
                placeholder="Zero to 5"
                type="number"
                name="rating"
                min="0"
                max="5"
                step="1"
                value={review.rating}
                onChange={handleTextChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Review:</label>
              <textarea
                id="content"
                className="form-control"
                type="text"
                name="content"
                value={review.content}
                placeholder="What do you think..."
                onChange={handleTextChange}
                rows="1"
              />
            </div>
            <div className="form-group d-flex align-items-center">
              <input
                id="is_favorite"
                className="form-check-input"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={snack.is_favorite}
              />
              <label htmlFor="is_favorite" className="form-check-label">
              is this your favorite?
              </label>
            </div>


            <div className="d-flex justify-content-start"> {/* Updated the alignment */}
              <button type="submit" className="btn btn-primary btn-sm">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary ml-2 btn-sm"
                onClick={handleNevermind}
              >
                Nevermind
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
}

export default ReviewForm;