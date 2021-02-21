import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section/Section';
const options = ['good', 'bad', 'neutral'];
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  positivePercentage() {
    let totalFeedback = this.totalFeedback();
    const { good } = this.state;
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  }

  onClickFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onClickFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalFeedback()}
            positivePercentage={this.positivePercentage()}
          />
        </Section>
      </>
    );
  }
}
export default App;
