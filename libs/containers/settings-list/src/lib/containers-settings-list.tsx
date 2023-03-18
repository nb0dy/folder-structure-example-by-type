import { ComponentsLink } from '@folder-structure-example-by-type/components/link';
import { routes } from '@folder-structure-example-by-type/consts/routes';
import { getSettings } from '@folder-structure-example-by-type/services/settings';
import { useMemo } from 'react';
import styled from 'styled-components';

const StyledContainersSettingsList = styled.div`
  color: pink;
`;

const MenuList = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-evenly;
`;

export function ContainersSettingsList() {
  const settingsList = useMemo(() => getSettings(), []);

  return (
    <StyledContainersSettingsList>
      <ComponentsLink to={routes.dashboard.url()}>Go Back</ComponentsLink>

      <h1>Welcome to ContainersSettingsList!</h1>

      <MenuList>
        {settingsList.map((settings) => (
          <ComponentsLink key={settings.name} to={settings.link}>
            {settings.name}
          </ComponentsLink>
        ))}
      </MenuList>
    </StyledContainersSettingsList>
  );
}

export default ContainersSettingsList;
