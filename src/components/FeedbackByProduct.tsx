// src/components/FeedbackByProduct.tsx
import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GET_FEEDBACKS_BY_PRODUCT = gql`
  query FeedbacksByProduct($productId: String!) {
    feedbacksByProduct(productId: $productId) {
      id
      summary
      text
      user {
        id
        name
      }
    }
  }
`;

function FeedbackByProduct() {
  const [productId, setProductId] = useState('');
  const [getFeedbacks, { loading, data }] = useLazyQuery(GET_FEEDBACKS_BY_PRODUCT);

  const handleSearch = () => {
    getFeedbacks({ variables: { productId } });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Feedbacks by Product</h1>
      <div className="mb-4">
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Enter Product ID"
          className="p-2 border rounded"
        />
        <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {data && data.feedbacksByProduct.map((feedback: any) => (
        <div key={feedback.id} className="p-4 mb-4 border rounded bg-white">
          <p><strong>User:</strong> {feedback.user.name}</p>
          <p><strong>Summary:</strong> {feedback.summary}</p>
          <p><strong>Feedback:</strong> {feedback.text}</p>
        </div>
      ))}
    </div>
  );
}

export default FeedbackByProduct;
