import { render } from '@testing-library/react';

import ContainersSettingsList from './containers-settings-list';

describe('ContainersSettingsList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContainersSettingsList />);
    expect(baseElement).toBeTruthy();
  });
});
