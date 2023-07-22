import { PropTypes } from 'prop-types';
import { FeedbackContent } from './FeedbackContent/FeedbackContent';
import { FeedbackContextProvider } from './FeedbackContextProvider/FeedbackContextProvider';

export const Feedback = ({ stats }) => {
  return stats &&
    typeof stats === 'object' &&
    Object.values(stats).length > 0 ? (
    <FeedbackContextProvider stats={stats}>
      <FeedbackContent />
    </FeedbackContextProvider>
  ) : (
    <FeedbackContextProvider>
      <FeedbackContent />
    </FeedbackContextProvider>
  );
};

Feedback.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};
