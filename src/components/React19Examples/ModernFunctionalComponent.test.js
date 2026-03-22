import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import ModernFunctionalComponent from './ModernFunctionalComponent';

describe('ModernFunctionalComponent (React 19 pattern)', () => {
  it('shows loading state, then renders data, and handles refresh', async () => {
    render(<ModernFunctionalComponent />);
    
    // 1. Check loading state immediately
    expect(screen.getByText(/Loading data.../i)).toBeInTheDocument();
    
    const refreshBtn = screen.getByRole('button', { name: /Refresh Data/i });
    expect(refreshBtn).toBeDisabled();

    // 2. Wait for async exact data to appear (like RTL requires)
    await waitFor(() => {
      expect(screen.getByText(/Demo User/i)).toBeInTheDocument();
    }, { timeout: 2000 });

    // 3. Ensure button is now enabled
    expect(refreshBtn).not.toBeDisabled();
    
    // 4. Test clicking the button (User Interaction Testing)
    fireEvent.click(refreshBtn);
    expect(screen.getByText(/Loading data.../i)).toBeInTheDocument();
  });
});