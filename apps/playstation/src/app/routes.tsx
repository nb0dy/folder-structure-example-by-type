import { routes } from '@folder-structure-example-by-type/consts/routes';
import { ContainersAppDetails } from '@folder-structure-example-by-type/containers/app-details';
import { ContainersDashboard } from '@folder-structure-example-by-type/containers/dashboard';
import { ContainersQuickMenuDrawer } from '@folder-structure-example-by-type/containers/quick-menu-drawer';
import { ContainersSettingsDetails } from '@folder-structure-example-by-type/containers/settings-details';
import { ContainersSettingsList } from '@folder-structure-example-by-type/containers/settings-list';
import { Route, Routes } from 'react-router-dom';

const ApplicationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.dashboard.path}>
          <Route path={routes.game.path} element={<ContainersDashboard type="game" />} />
          <Route path={routes.multimedia.path} element={<ContainersDashboard type="multimedia" />} />
          <Route index element={<ContainersDashboard type="game" />} />
        </Route>
        <Route path={routes.multimedia.path}>
          <Route path={routes.multimedia.details.path} element={<ContainersAppDetails />} />
          <Route index element={<ContainersDashboard type="multimedia" />} />
        </Route>
        <Route path={routes.game.path}>
          <Route path={routes.multimedia.details.path} element={<ContainersAppDetails />} />
          <Route index element={<ContainersDashboard type="game" />} />
        </Route>
        <Route path={routes.settings.path}>
          <Route path={routes.settings.details.path} element={<ContainersSettingsDetails />} />
          <Route index element={<ContainersSettingsList />} />
        </Route>
        <Route path="*" element={<ContainersDashboard />} />
      </Routes>
      <ContainersQuickMenuDrawer />
    </>
  );
};

export default ApplicationRoutes;
