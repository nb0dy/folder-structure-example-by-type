import { getApps } from '@folder-structure-example-by-type/services/app';
import { useMemo } from 'react';
import styled from 'styled-components';

import ComponentsApplicationList from './components/application-list';

/* eslint-disable-next-line */
export interface ContainersDashboardProps {
  type?: 'game' | 'multimedia';
}

const StyledContainersDashboard = styled.div`
  color: pink;
`;

export function ContainersDashboard({ type }: ContainersDashboardProps) {
  const data = useMemo(() => getApps(type), [type]);

  return (
    <StyledContainersDashboard>
      <h1>Welcome to ContainersDashboard!</h1>

      <ComponentsApplicationList apps={data} />
    </StyledContainersDashboard>
  );
}

export default ContainersDashboard;
