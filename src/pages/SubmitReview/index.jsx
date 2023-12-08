import { useState, useEffect } from 'react'
import ReviewList from '../WatchReview'
import Header from '../../components/Header';
const AddReview = () => {
  const [review, setReview] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    fetch('http://localhost:4000/add-review', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        UserUserID: document.cookie.split('=')[1],
        Review: review
      })
    }).then((res) => {
      if(!res.ok) return setMessage("An error Occured")
      return res.json()
    }).then((res) => {
      
    })
    setMessage("Thank you for your review :)")
  }

  return (
    <>
    <Header/>
    <div className="add-package-container">
       <h1>Add a Review</h1>
       <input type="sumbit" value={review} onChange={(e) => setReview(e.target.value)} />
       <p>{message}</p>
       <button className="add-package-button" onClick={handleSubmit}>Submit</button>

       <ReviewList/>
    </div>
    </>
  )
}
export default AddReview
