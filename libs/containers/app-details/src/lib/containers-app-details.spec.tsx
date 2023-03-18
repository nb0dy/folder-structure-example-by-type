import { render } from '@testing-library/react';

import ContainersAppDetails from './containers-app-details';

describe('ContainersAppDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContainersAppDetails />);
    expect(baseElement).toBeTruthy();
  });
});
