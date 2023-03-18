import { render } from '@testing-library/react';

import ContainersSettingsDetails from './containers-settings-details';

describe('ContainersSettingsDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContainersSettingsDetails />);
    expect(baseElement).toBeTruthy();
  });
});
