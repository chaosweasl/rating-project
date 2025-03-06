import { useState } from "react";

import "./App.css";
import starIcon from "../assets/images/icon-star.svg";
import illustrationIcon from "../assets/images/illustration-thank-you.svg";

export default function App() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  function FeedbackPage({ selectedRating }: { selectedRating: number | null }) {
    return (
      <>
        <div className="background">
          <div className="card">
            <div className="icon-box">
              <img src={starIcon} />
            </div>

            <div className="content">
              <h1 className="review-question">How did we do?</h1>

              <p className="suggestion">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>

              <div className="rating-box">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    className={`rating-button ${
                      selectedRating === rating ? "selected" : ""
                    }`}
                    onClick={() => handleRatingClick(rating)}
                  >
                    {rating}
                  </button>
                ))}
              </div>

              <button
                className="submit-button"
                onClick={() => {
                  if (selectedRating !== null) {
                    setIsSubmitted(true);
                  }
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  function ThankYouPage() {
    return (
      <>
        <div className="background">
          <div className="ty-card">
            <div className="icon-box2">
              <img src={illustrationIcon} />
            </div>

            <h1 className="selected-value">
              You selected {selectedRating} out of 5
            </h1>
          </div>
        </div>
      </>
    );
  }

  return isSubmitted ? (
    <ThankYouPage />
  ) : (
    <FeedbackPage selectedRating={selectedRating} />
  );
}
