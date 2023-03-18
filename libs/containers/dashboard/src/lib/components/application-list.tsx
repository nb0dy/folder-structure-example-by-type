import {
  GreedFallIcon,
  HogwartsLegacyIcon,
  SpotifyIcon,
  TvAndVideoIcon,
} from '@folder-structure-example-by-type/assets/icons';
import { ComponentsLink } from '@folder-structure-example-by-type/components/link';
import { routes } from '@folder-structure-example-by-type/consts/routes';
import { useMemo } from 'react';
import styled from 'styled-components';

type TApp = {
  name: string;
  icon: string;
  type: 'game' | 'multimedia';
  link: string;
};

export interface ComponentsApplicationListProps {
  apps: TApp[];
}

const StyledComponentsApplicationList = styled.div`
  color: pink;
`;

const MenuList = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-evenly;
`;

function AppItem({ app }: { app: TApp }) {
  const icon = useMemo(() => {
    switch (app.icon) {
      case 'hogwartsLegacy': {
        return <HogwartsLegacyIcon />;
      }

      case 'greedFall': {
        return <GreedFallIcon />;
      }

      case 'spotify': {
        return <SpotifyIcon />;
      }

      case 'tvAndVideo': {
        return <TvAndVideoIcon />;
      }
    }
  }, [app.icon]);

  if (!icon) {
    return null;
  }

  return <ComponentsLink to={app.link}>{icon}</ComponentsLink>;
}

export function ComponentsApplicationList({ apps }: ComponentsApplicationListProps) {
  return (
    <StyledComponentsApplicationList>
      <h1>Welcome to ComponentsApplicationList!</h1>

      <MenuList>
        <ComponentsLink to={routes.game.url()}>Games</ComponentsLink>
        <ComponentsLink to={routes.multimedia.url()}>Multimedia</ComponentsLink>
        <ComponentsLink to={routes.settings.url()}>Settings</ComponentsLink>
      </MenuList>

      <MenuList>
        {apps.map((app) => (
          <AppItem key={app.name} app={app} />
        ))}
      </MenuList>
    </StyledComponentsApplicationList>
  );
}

export default ComponentsApplicationList;
