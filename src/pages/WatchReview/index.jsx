import React, { useEffect, useState } from 'react';

const boxDesign = {
  width: '95vw',
  height: 'auto',
  backgroundColor: 'white',
  borderRadius: '4px',
  padding: '7px',
  marginTop: '8px',
  textAlign: 'left'
}

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/fetch-review').then((res) => res.json())
      .then((res) => {
        setReviews(res)
      })
  }, [])

  return (
    <>
      <h1>Reviews</h1>

      <div>
        {reviews.map((review,i) => (
          <div style={boxDesign} key={i}>
            <strong>User:</strong> {review.UserUserID} <br />
            <strong>Review:</strong> {review.Review}
          </div>
        ))}
      </div>
    </>
  );
};

export default ReviewList;