import { ComponentsLink } from '@folder-structure-example-by-type/components/link';
import { routes } from '@folder-structure-example-by-type/consts/routes';
import { getSettings } from '@folder-structure-example-by-type/services/settings';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainersSettingsDetails = styled.div`
  color: pink;
`;

export function ContainersSettingsDetails() {
  const { id } = useParams<{ id: string }>();
  const data = useMemo(() => getSettings().find((settings) => settings.id === id), [id]);

  if (!data) {
    return (
      <StyledContainersSettingsDetails>
        <h1>No setting exists</h1>
      </StyledContainersSettingsDetails>
    );
  }

  return (
    <StyledContainersSettingsDetails>
      <ComponentsLink to={routes.settings.url()}>Go Back</ComponentsLink>

      <h1>Welcome to ContainersSettingsDetails!</h1>

      <h3>{data.name}</h3>
    </StyledContainersSettingsDetails>
  );
}

export default ContainersSettingsDetails;
