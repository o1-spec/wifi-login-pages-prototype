import AuthenticationManager from './AuthenticationManager';

describe('AuthenticationManager', () => {
  it('triggers logout state change successfully', () => {
    // 1. Create a mock function to act as the React state updater
    const mockOnStateChange = jest.fn();
    
    // 2. Initialize the manager (NO React component needed!)
    const authManager = new AuthenticationManager(mockOnStateChange);
    
    // 3. Trigger the isolated logic
    authManager.logout();
    
    // 4. Assert it communicates exactly what the component needs
    expect(mockOnStateChange).toHaveBeenCalledWith({ loggedOut: true });
    expect(mockOnStateChange).toHaveBeenCalledTimes(1);
  });
});