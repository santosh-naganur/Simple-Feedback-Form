import React from 'react';
import './FeedbackList.css';

function FeedbackList({ feedbacks, loading }) {
  return (
    <div className="feedback-list-container">
      <h2>📋 Feedback List ({feedbacks.length})</h2>

      {loading && <div className="loading">Loading feedback...</div>}

      {!loading && feedbacks.length === 0 && (
        <div className="empty-state">
          <p>No feedback yet. Be the first to share!</p>
        </div>
      )}

      {!loading && feedbacks.length > 0 && (
        <div className="feedback-items">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="feedback-item">
              <div className="feedback-header">
                <h3>{feedback.name}</h3>
                <span className="feedback-date">
                  {new Date(feedback.timestamp).toLocaleDateString()}
                </span>
              </div>
              <p className="feedback-email">{feedback.email}</p>
              <p className="feedback-message">{feedback.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeedbackList;
