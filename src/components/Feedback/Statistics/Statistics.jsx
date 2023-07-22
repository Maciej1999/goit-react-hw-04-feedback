import React from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import css from './../Feedback.module.css';

export const Statistics = ({ stats, total, positivePercentage }) => {
  return (
    <div className={css.summary}>
      {total > 0 && (
        <>
          {Object.keys({ ...stats }).map(statekey => {
            return (
              <span className={css.entry} key={`feedbackStat${nanoid()}`}>
                {statekey[0].toUpperCase() + '' + statekey.slice(1)}:
                <span className={`${css.value} ${statekey}`}>
                  {stats[statekey]}
                </span>
              </span>
            );
          })}
          <span className={css.entry}>
            Total:
            <span className={`${css.value} total`}>{total}</span>
          </span>
          <span className={css.entry}>
            Positive feedback:
            <span className={`${css.value} positive`}>
              {positivePercentage}%
            </span>
          </span>
        </>
      )}
    </div>
  );
};

Statistics.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
