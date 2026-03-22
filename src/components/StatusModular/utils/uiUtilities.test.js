import { formatBytes, formatTime, getStatusColor } from './uiUtilities';

describe('UI Utilities (Pure Functions)', () => {
  it('formats bytes into readable strings', () => {
    expect(formatBytes(0)).toBe('0 Bytes');
    expect(formatBytes(1024)).toBe('1 KB');
    expect(formatBytes(1048576)).toBe('1 MB');
  });

  it('formats seconds into time strings', () => {
    expect(formatTime(0)).toBe('0s');
    expect(formatTime(125)).toBe('2m 5s');
    expect(formatTime(3600)).toBe('1h 0m 0s');
  });

  it('returns correct color based on status', () => {
    expect(getStatusColor('active')).toBe('#2ecc71');
    expect(getStatusColor('expired')).toBe('#e74c3c');
    expect(getStatusColor('unknown_state')).toBe('#95a5a6');
  });
});