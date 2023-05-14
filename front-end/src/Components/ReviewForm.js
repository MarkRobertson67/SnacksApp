
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm({ handleAdd, toggleView , reviewDetails, props }) {
  const { id } = useParams();
  // const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    snack_id: id,
  })

  const handleTextChange = (event) => {
setReview({...review, [event.target.id]: event.target.value})
  }

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails)
    }
  }, [id, reviewDetails])

  const handleSubmit = (event) => {
    event.preventDefault();
     handleAdd(review, id);
    
    if (reviewDetails) {
     toggleView()
    }
    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      snack_id: id,
    })
  }

  const handleNevermind = () => {
    setReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      snack_id: id,
    });
  };


  return (
    <div className="container my-5">
      <h3>Add a New Review</h3>
      <div className="row">
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
            <div className="d-flex justify-content-start"> {/* Updated the alignment */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary ml-2"
                onClick={handleNevermind}
              >
                Nevermind
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;