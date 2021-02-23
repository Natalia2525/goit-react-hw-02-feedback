import st from './FeedbackOptions.module.css';
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

export default FeedbackOptions;
