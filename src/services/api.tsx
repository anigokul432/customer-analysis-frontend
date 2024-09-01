// src/services/api.tsx
import { gql } from '@apollo/client';

export const GET_FEEDBACKS = gql`
  query GetFeedbacks {
    feedbacks {
      id
      productId
      userId
      profileName
      helpfulnessNumerator
      helpfulnessDenominator
      score
      time
      summary
      text
    }
  }
`;

export const GET_FEEDBACK_BY_ID = gql`
  query GetFeedback($id: ID!) {
    feedback(id: $id) {
      id
      productId
      userId
      profileName
      helpfulnessNumerator
      helpfulnessDenominator
      score
      time
      summary
      text
    }
  }
`;

export const GET_FEEDBACKS_BY_PRODUCT = gql`
  query GetFeedbacksByProduct($productId: String!) {
    feedbacksByProduct(productId: $productId) {
      id
      productId
      userId
      profileName
      helpfulnessNumerator
      helpfulnessDenominator
      score
      time
      summary
      text
      user {
        id
        name
      }
    }
  }
`;

export const GET_FEEDBACKS_BY_USER = gql`
  query GetFeedbacksByUser($userId: String!) {
    feedbacksByUser(userId: $userId) {
      id
      productId
      userId
      profileName
      helpfulnessNumerator
      helpfulnessDenominator
      score
      time
      summary
      text
      product {
        id
      }
    }
  }
`;

export const GET_PRODUCTS_WITH_FEEDBACKS = gql`
  query GetProductsWithFeedbacks {
    productsWithFeedbacks {
      id
      feedbacks {
        id
        helpfulnessNumerator
        helpfulnessDenominator
        score
        summary
        text
      }
    }
  }
`;

export const GET_FEEDBACKS_BY_SCORE_RANGE = gql`
  query GetFeedbacksByScoreRange($minScore: Int!, $maxScore: Int!) {
    feedbacksByScoreRange(minScore: $minScore, maxScore: $maxScore) {
      id
      productId
      userId
      profileName
      helpfulnessNumerator
      helpfulnessDenominator
      score
      time
      summary
      text
    }
  }
`;

export const GET_FEEDBACKS_BY_KEYWORD = gql`
  query GetFeedbacksByKeyword($keyword: String!) {
    feedbacksByKeyword(keyword: $keyword) {
      id
      productId
      userId
      profileName
      helpfulnessNumerator
      helpfulnessDenominator
      score
      time
      summary
      text
    }
  }
`;

export const GET_AVERAGE_SCORE_BY_PRODUCT = gql`
  query GetAverageScoreByProduct($productId: String!) {
    averageScoreByProduct(productId: $productId)
  }
`;

export const GET_FEEDBACK_COUNT_BY_SCORE = gql`
  query GetFeedbackCountByScore {
    feedbackCountByScore {
      score
      count
    }
  }
`;

export const GET_FEEDBACKS_BY_DATE_RANGE = gql`
  query GetFeedbacksByDateRange($startDate: Int!, $endDate: Int!) {
    feedbacksByDateRange(startDate: $startDate, endDate: $endDate) {
      id
      productId
      userId
      profileName
      helpfulnessNumerator
      helpfulnessDenominator
      score
      time
      summary
      text
    }
  }
`;

export const GET_FEEDBACKS_BY_HELPFULNESS_RATIO = gql`
  query GetFeedbacksByHelpfulnessRatio($minRatio: Float!) {
    feedbacksByHelpfulnessRatio(minRatio: $minRatio) {
      id
      productId
      userId
      profileName
      helpfulnessNumerator
      helpfulnessDenominator
      score
      time
      summary
      text
    }
  }
`;

export const GET_RECENT_FEEDBACKS = gql`
  query GetRecentFeedbacks($limit: Int!) {
    recentFeedbacks(limit: $limit) {
      id
      productId
      userId
      profileName
      helpfulnessNumerator
      helpfulnessDenominator
      score
      time
      summary
      text
    }
  }
`;
