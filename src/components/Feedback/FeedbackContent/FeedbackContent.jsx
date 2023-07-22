import { useContext } from 'react';
import FeedbackContext from './../FeedbackContext/FeedbackContext';
import { Statistics } from './../Statistics/Statistics';
import { FeedbackOptions } from './../FeedbackOptions/FeedbackOptions';
import { Notification } from './../Notification/Notification';
import { Section } from './../Section/Section';
import css from './../Feedback.module.css';

export const FeedbackContent = () => {
  const [feedback, setFeedback] = useContext(FeedbackContext);
  const feedbackBtnClick = (e, key) => {
    e.preventDefault();

    setFeedback(prevState => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };
  const countTotalFeedback = () =>
    Object.values({ ...feedback }).reduce((a, b) => a + b, 0);
  const countPositiveFeedbackPercentage = () =>
    Math.round((100 * feedback.good) / countTotalFeedback() || 0);

  const total = countTotalFeedback();
  const stats = {
    stats: { ...feedback },
    total: total,
    positivePercentage: countPositiveFeedbackPercentage(),
  };

  return (
    <div className={css.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[...Object.keys(feedback)]}
          onLeaveFeedback={feedbackBtnClick}
        />
      </Section>
      <Section title="Statistics">
        <>
          {total ? (
            <Statistics {...stats} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </>
      </Section>
    </div>
  );
};
