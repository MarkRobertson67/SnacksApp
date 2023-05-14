import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

function ReviewEditForm(props) {
  const { id } = useParams();
  const { reviewDetails } = props;
  
  const [reviews, setReviews] = useState([]);

  const [review, setReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    snack_id: id,
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
    handleEdit(review, id);
    window.location.reload(false);
    // if (reviewDetails) {
    //   props.toggleView()
    // }
  }


  const handleEdit = (updatedReview) => {
    axios
      .put(`${API}/snacks/${id}/reviews/${updatedReview.id}`, updatedReview)
      .then((response) => {
        const copyReviewArray = [...reviews];
        const indexUpdatedReview = copyReviewArray.findIndex((review) => {
          return review.id === updatedReview.id;
        });
        copyReviewArray[indexUpdatedReview] = response.data;
console.log("handle edit", response.data)
        setReviews(copyReviewArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleNevermind = () => {
    setReview({
      reviewer: "",
      title: "",
      content: "",
      snack_id: id,
    });
  };


  return (
    <div className="container my-5">
      <h3>Edit Review</h3>
      <div className="row justify-content-center"> 
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

export default ReviewEditForm;