import React, { Component } from 'react';
import FeedbackOptions from './feedbackoptions.jsx';
import Section from './section.jsx';
import Statistics from './statistics.jsx';
import Notification from './notification.jsx';
import s from './feedback.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({...prevState, [type]: prevState[type] + 1,}));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.box}>
        <>
          <h1>Please leave feedback</h1>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </>
        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
        </Section>)}
      </div>
    );
  }
}
export default App;
