import styled from 'styled-components';

const StyledComponentsButton = styled.div`
  color: pink;
`;

export function ComponentsButton() {
  return (
    <StyledComponentsButton>
      <h1>Welcome to ComponentsButton!</h1>
    </StyledComponentsButton>
  );
}

export default ComponentsButton;
