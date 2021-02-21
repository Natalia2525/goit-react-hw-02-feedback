const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div>
    {options.map(option => (
      <button
        type="button"
        onClick={onLeaveFeedback}
        key={option}
        data-feedback={option}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
