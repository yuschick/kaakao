import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { VisuallyHidden } from '../VisuallyHidden';

describe('Visually Hidden', () => {
  it('Visually Hidden should render correctly', () => {
    const text = 'Link opens in a new window';

    render(<VisuallyHidden>{text}</VisuallyHidden>);
    const element = screen.getByText(text);

    expect(element).toBeInTheDocument();
  });
});
