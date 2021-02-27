import st from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    {options.map(option => (
      <button
        className={st.button}
        type="button"
        onClick={onLeaveFeedback}
        key={option}
        name={option}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
