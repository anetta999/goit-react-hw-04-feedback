import { useState } from 'react';
import { GlobalStyle } from 'Globalstyle';
import { Container } from './Container';
import { FeedbackOptions } from './Section/Feedback-options/FeedbackOptions ';
import { Notification } from './Section/Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Section/Statistics/Statistics';

export const App = () => {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Збільшуємо кількість фідбеків на 1 при кліку на кнопку відповідного фідбеку
  const onLeaveFeedback = option => {
    setOptions(prevOptions => {
      return { ...prevOptions, [option]: prevOptions[option] + 1 };
    });
  };

  const { good, neutral, bad } = options;
  const optionsKeys = Object.keys(options);

  // Рахуємо загальну кількість фідбеків
  const countTotalFeedback = good + neutral + bad;

  // Перевіряємо наявність фідбеків
  const isFeedbackGiven = countTotalFeedback > 0;

  // Вираховуємо відсоток позитивних фідбеків
  const positivePercentage = Math.round((good * 100) / countTotalFeedback);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsKeys}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {isFeedbackGiven ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </Container>
  );
};
