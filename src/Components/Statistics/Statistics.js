import React from 'react';
import Message from './NotificationMessage';
import {
  Statistic,
  Good,
  Neutral,
  Bad,
  Total,
  PositiveFedback,
} from './styles';

function Statistics({
  goodValue,
  neutralValue,
  badValue,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return countTotalFeedback !== 0 ? (
    <Statistic>
      <Good>Good:{goodValue}</Good>
      <Neutral>Neutral:{neutralValue}</Neutral>
      <Bad>Bad:{badValue}</Bad>
      <Total>Total:{countTotalFeedback}</Total>
      <PositiveFedback>
        PositiveFedback:{countPositiveFeedbackPercentage}%
      </PositiveFedback>
    </Statistic>
  ) : (
    <Message NotificationMessage="No feedback given"></Message>
  );
}

export default Statistics;
