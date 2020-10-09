import React, { Component } from 'react';
import Layout from './Layout/Layout';
import Controls from './Counter/Controls';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export default class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = e => {
    const { name } = e.target;
    this.setState(state => {
      return {
        [name]: state[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, e) => {
      acc += e;
      return acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good !== 0
      ? Math.trunc((this.state.good / this.countTotalFeedback()) * 100)
      : this.state.good;
  };

  render() {
    return (
      <Layout>
        <Section title="Please leave feedback">
          <Controls onIncrement={this.onIncrement} />
        </Section>
        <Section title="Statistics">
          <Statistics
            goodValue={this.state.good}
            neutralValue={this.state.neutral}
            badValue={this.state.bad}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </Layout>
    );
  }
}
