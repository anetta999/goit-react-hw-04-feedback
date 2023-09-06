import { StyledMessage } from './Notification.styled';
export const Notification = ({ message }) => {
  return (
    <>
      <StyledMessage>{message}</StyledMessage>
    </>
  );
};
