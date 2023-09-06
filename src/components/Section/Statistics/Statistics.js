import { StatisticsText } from './Statistics.styled';
import { StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = 0,
}) => {
  return (
    <ul>
      <StatisticsItem>
        <StatisticsText>Good: {good}</StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>Neutral: {neutral}</StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>Bad: {bad}</StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>Total: {total}</StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>
          Positive feedback: {positivePercentage}%
        </StatisticsText>
      </StatisticsItem>
    </ul>
  );
};
