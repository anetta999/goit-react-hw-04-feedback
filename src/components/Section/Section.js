import { StyledSection } from './Section.styled';
import { SectionTitle } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </StyledSection>
  );
};
