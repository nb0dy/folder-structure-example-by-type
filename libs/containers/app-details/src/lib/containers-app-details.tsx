import { ComponentsLink } from '@folder-structure-example-by-type/components/link';
import { routes } from '@folder-structure-example-by-type/consts/routes';
import { getApp } from '@folder-structure-example-by-type/services/app';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainersAppDetails = styled.div`
  color: pink;
`;

const getBoBackUrl = (type: 'game' | 'multimedia'): string => {
  switch (type) {
    case 'game': {
      return routes.game.url();
    }

    case 'multimedia': {
      return routes.multimedia.url();
    }

    default: {
      return routes.dashboard.url();
    }
  }
};

export function ContainersAppDetails() {
  const { id } = useParams<{ id: string }>();
  const data = useMemo(() => getApp(id), [id]);

  if (!data) {
    return (
      <StyledContainersAppDetails>
        <h1>No App</h1>
      </StyledContainersAppDetails>
    );
  }

  return (
    <StyledContainersAppDetails>
      <ComponentsLink to={getBoBackUrl(data.type)}>Go Back</ComponentsLink>

      <h1>Welcome to ContainersAppDetails!</h1>

      <h3>{data.name}</h3>
    </StyledContainersAppDetails>
  );
}

export default ContainersAppDetails;
