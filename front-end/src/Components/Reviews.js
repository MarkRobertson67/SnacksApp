import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}/reviews`)
      .then((response) => {
        console.log(response);
        setReviews(response.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

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

  const handleDelete = (reviewid) => {
    axios
      .delete(`${API}/snacks/${id}/reviews/${reviewid}`)
      .then(
        (response) => {
          const copyReviewArray = [...reviews];
          const indexDeletedReview = copyReviewArray.findIndex((review) => {
            return review.id === reviewid;
          });
          copyReviewArray.splice(indexDeletedReview, 1);
          setReviews(copyReviewArray);
        },
        // (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedReview) => {
    axios
      .put(`${API}/snacks/${id}/reviews`, updatedReview)
      .then((response) => {
        const copyReviewArray = [...reviews];
        // console.log(reviews)
        const indexUpdatedReview = copyReviewArray.findIndex((review) => {
          return review.id === updatedReview.id;
        });

        copyReviewArray[indexUpdatedReview] = response.data;

        setReviews(copyReviewArray);
      })
      .catch((c) => console.warn("catch", c));
  };
console.log(reviews)
  return ( 
  

    <section className="Reviews">
      <h2>Reviews</h2>
      <ReviewForm handleAdd={handleAdd} handleEdit={handleEdit}/>
        
      {/* </ReviewForm> */}
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleDelete={handleDelete}
          
        />
      ))}
    </section>
  );
}
export default Reviews;
