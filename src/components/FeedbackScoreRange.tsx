// src/components/FeedbackScoreRange.tsx
import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GET_FEEDBACKS_BY_SCORE_RANGE = gql`
  query FeedbacksByScoreRange($minScore: Int!, $maxScore: Int!) {
    feedbacksByScoreRange(minScore: $minScore, maxScore: $maxScore) {
      id
      summary
      text
      score
    }
  }
`;

function FeedbackScoreRange() {
  const [minScore, setMinScore] = useState(1);
  const [maxScore, setMaxScore] = useState(5);
  const [getFeedbacks, { loading, data }] = useLazyQuery(GET_FEEDBACKS_BY_SCORE_RANGE);

  const handleSearch = () => {
    getFeedbacks({ variables: { minScore, maxScore } });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Feedbacks by Score Range</h1>
      <div className="mb-4">
        <label className="mr-2">Min Score:</label>
        <input
          type="number"
          value={minScore}
          onChange={(e) => setMinScore(parseInt(e.target.value))}
          className="p-2 border rounded"
        />
        <label className="mx-2">Max Score:</label>
        <input
          type="number"
          value={maxScore}
          onChange={(e) => setMaxScore(parseInt(e.target.value))}
          className="p-2 border rounded"
        />
        <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {data && data.feedbacksByScoreRange.map((feedback: any) => (
        <div key={feedback.id} className="p-4 mb-4 border rounded bg-white">
          <p><strong>Score:</strong> {feedback.score}</p>
          <p><strong>Summary:</strong> {feedback.summary}</p>
          <p><strong>Feedback:</strong> {feedback.text}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackScoreRange;
