import { OptionsList } from './Feedback-options.styled';
import { OptionsButton } from './Feedback-options.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => {
        return (
          <li key={option}>
            <OptionsButton
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </OptionsButton>
          </li>
        );
      })}
    </OptionsList>
  );
};
