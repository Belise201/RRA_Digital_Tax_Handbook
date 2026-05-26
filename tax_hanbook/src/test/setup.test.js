import { describe, it, expect } from 'vitest';
import { createMockRecognition } from './mockSpeechRecognition';

describe('Testing Infrastructure', () => {
  it('should have vitest configured correctly', () => {
    expect(true).toBe(true);
  });

  it('should have jest-dom matchers available', () => {
    const element = document.createElement('div');
    element.textContent = 'Hello World';
    document.body.appendChild(element);
    expect(element).toBeInTheDocument();
    document.body.removeChild(element);
  });

  it('should have mock SpeechRecognition available', () => {
    const mockRecognition = createMockRecognition();
    expect(mockRecognition).toBeDefined();
    expect(mockRecognition.start).toBeDefined();
    expect(mockRecognition.stop).toBeDefined();
    expect(mockRecognition.abort).toBeDefined();
  });

  it('should be able to simulate speech recognition results', () => {
    return new Promise((resolve) => {
      const mockRecognition = createMockRecognition();
      
      mockRecognition.onresult = (event) => {
        expect(event.results[0][0].transcript).toBe('test transcript');
        expect(event.results[0][0].confidence).toBe(0.95);
        resolve();
      };
      
      mockRecognition.start();
      mockRecognition.simulateResult('test transcript', 0.95, true);
    });
  });

  it('should be able to simulate speech recognition errors', () => {
    return new Promise((resolve) => {
      const mockRecognition = createMockRecognition();
      
      mockRecognition.onerror = (event) => {
        expect(event.error).toBe('no-speech');
        resolve();
      };
      
      mockRecognition.start();
      mockRecognition.simulateError('no-speech');
    });
  });
});
