import { render } from '@testing-library/react';

import ComponentsLink from './components-link';

describe('ComponentsLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsLink />);
    expect(baseElement).toBeTruthy();
  });
});
