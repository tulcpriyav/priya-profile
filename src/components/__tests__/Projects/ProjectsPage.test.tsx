import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ProjectsPage from '../../../../app/projects/page';

describe('ProjectsPage', () => {
  it('renders a Projects heading and overview copy', () => {
    render(<ProjectsPage />);

    expect(screen.getByRole('heading', { level: 1, name: /projects/i })).toBeInTheDocument();
    expect(
      screen.getByText(/a collection of products, experiments, and hackathon builds/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/healthcare data platform/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /featured work/i })).toBeInTheDocument();
    expect(screen.queryByText(/hackathons & awards/i)).not.toBeInTheDocument();
  });
});
