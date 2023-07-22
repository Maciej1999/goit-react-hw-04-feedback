import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import css from './../Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback--btns">
      {[...options].map(key => {
        return (
          <button
            key={`feedbackBtn${nanoid()}`}
            className={`${css.btn}  ${key}`}
            onClick={e => onLeaveFeedback(e, key)}
          >
            {key[0].toUpperCase() + '' + key.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
