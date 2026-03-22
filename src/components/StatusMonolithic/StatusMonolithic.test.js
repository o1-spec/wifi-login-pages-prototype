import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import StatusMonolithic from './StatusMonolithic';

describe('StatusMonolithic Component', () => {
  it('renders initial loading state (hard to test isolated logic)', async () => {
    render(<StatusMonolithic />);
    
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
    }, { timeout: 1500 });
    
    expect(screen.getByText(/demo-user/i)).toBeInTheDocument();
  });
});