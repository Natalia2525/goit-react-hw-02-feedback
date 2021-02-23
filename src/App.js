import { Component } from 'react';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Section from './Components/Section';
import Notification from './Components/Notification';
const options = ['good', 'bad', 'neutral'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + bad + neutral;
  };

  handlePositivePercentage() {
    let totalFeedback = this.handleTotalFeedback();
    const { good } = this.state;
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  }

  handleClickFeedback = e => {
    const feedback = e.target.name;

    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    let totalFeedback = this.handleTotalFeedback();
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClickFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {totalFeedback === 0 ? (
            <Notification massage="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.handleTotalFeedback()}
              positivePercentage={this.handlePositivePercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
