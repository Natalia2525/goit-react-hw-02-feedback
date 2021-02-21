const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positivePercentage}%</li>
      </ul>
    ) : null}
  </>
);

export default Statistics;
