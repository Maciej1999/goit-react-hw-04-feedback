import { PropTypes } from 'prop-types';
import css from './../Feedback.module.css';
export const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2 className={css.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
