// src/components/FeedbackByUser.tsx
import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GET_FEEDBACKS_BY_USER = gql`
  query FeedbacksByUser($userId: String!) {
    feedbacksByUser(userId: $userId) {
      id
      summary
      text
      product {
        id
      }
    }
  }
`;

function FeedbackByUser() {
  const [userId, setUserId] = useState('');
  const [getFeedbacks, { loading, data }] = useLazyQuery(GET_FEEDBACKS_BY_USER);

  const handleSearch = () => {
    getFeedbacks({ variables: { userId } });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Feedbacks by User</h1>
      <div className="mb-4">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
          className="p-2 border rounded"
        />
        <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {data && data.feedbacksByUser.map((feedback: any) => (
        <div key={feedback.id} className="p-4 mb-4 border rounded bg-white">
          <p><strong>Product ID:</strong> {feedback.product.id}</p>
          <p><strong>Summary:</strong> {feedback.summary}</p>
          <p><strong>Feedback:</strong> {feedback.text}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackByUser;
