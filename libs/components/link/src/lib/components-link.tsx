import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface ComponentsLinkProps {
  to: string;
}

const StyledComponentsLink = styled.div`
  color: pink;
`;

export function ComponentsLink({ to, children }: PropsWithChildren<ComponentsLinkProps>) {
  return (
    <StyledComponentsLink>
      <Link to={to}>{children}</Link>
    </StyledComponentsLink>
  );
}

export default ComponentsLink;
