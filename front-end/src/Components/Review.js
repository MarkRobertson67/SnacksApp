
import { useState } from "react";
import ReviewForm from "./ReviewForm";

function Review({ review, handleDelete, handleSubmit, handleEdit }) {
  const [viewEditForm, toggleEditForm] = useState(false);

  //Update
  // toggle functionality
  // hide the form, or show the form

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  }

  return (
    <div className="Review">
      
      {viewEditForm ? (
        <ReviewForm reviewDetails={review} toggleView={toggleView} />
      ) : (
        <div>
          <h4>
            {review.title} <span className="badge bg-secondary">{review.rating}</span>
          </h4>
          <h5>{review.reviewer}</h5>
          <p>{review.content}</p>
          <button className="btn btn-primary" onClick={toggleView}>
        Edit this review
      </button>
          <button className="btn btn-danger" onClick={() => handleDelete(review.id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Review;