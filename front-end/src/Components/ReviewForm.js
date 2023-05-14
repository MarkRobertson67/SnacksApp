
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

  return (
    <div className="container my-5">
      <div className="w-50 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <h3>Add a New Review</h3>
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
          />
        </div>

        <br />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}

export default ReviewForm;