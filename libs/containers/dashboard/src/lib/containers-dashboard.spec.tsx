import { render } from '@testing-library/react';

import ContainersDashboard from './containers-dashboard';

describe('ContainersDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContainersDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
