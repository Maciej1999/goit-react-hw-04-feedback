import { useState } from 'react';
import { PropTypes } from 'prop-types';
import FeedbackContext from '../FeedbackContext/FeedbackContext';
const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};
export const FeedbackContextProvider = ({
  stats = INITIAL_STATE,
  ...children
}) => {
  const [feedback, setFeedback] = useState(stats);
  const contextValue = [feedback, setFeedback];
  return <FeedbackContext.Provider value={contextValue} {...children} />;
};

FeedbackContextProvider.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
  children: PropTypes.any,
};
