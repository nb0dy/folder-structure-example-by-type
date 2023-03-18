import { render } from '@testing-library/react';

import ContainersQuickMenuDrawer from './containers-quick-menu-drawer';

describe('ContainersQuickMenuDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContainersQuickMenuDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
