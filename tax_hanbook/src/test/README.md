# Testing Infrastructure

This directory contains the testing infrastructure for the Tax Handbook application.

## Overview

The testing setup uses:
- **Vitest**: Fast unit test framework for Vite projects
- **React Testing Library**: Testing utilities for React components
- **jsdom**: DOM implementation for Node.js (test environment)
- **@testing-library/jest-dom**: Custom matchers for DOM assertions

## Files

### `setup.js`
Test setup file that runs before all tests. It:
- Extends Vitest's `expect` with jest-dom matchers
- Cleans up after each test
- Mocks browser APIs (matchMedia, IntersectionObserver, ResizeObserver)

### `mockSpeechRecognition.js`
Mock implementation of the Web Speech API's SpeechRecognition interface for testing voice search functionality.

#### Key Features:
- Complete mock of SpeechRecognition API
- Simulate successful recognition results
- Simulate errors (no-speech, not-allowed, network, etc.)
- Simulate interim results (real-time transcription)
- Simulate multiple alternatives
- Helper functions for common test scenarios

#### Usage Examples:

**Basic Usage:**
```javascript
import { createMockRecognition } from './test/mockSpeechRecognition';

const mockRecognition = createMockRecognition();
mockRecognition.onresult = (event) => {
  console.log(event.results[0][0].transcript);
};
mockRecognition.start();
mockRecognition.simulateResult('hello world', 0.95, true);
```

**Simulate Errors:**
```javascript
import { createMockRecognitionWithError } from './test/mockSpeechRecognition';

const mockRecognition = createMockRecognitionWithError('no-speech');
mockRecognition.onerror = (event) => {
  console.log(event.error); // 'no-speech'
};
mockRecognition.start();
```

**Simulate Success:**
```javascript
import { createMockRecognitionWithSuccess } from './test/mockSpeechRecognition';

const mockRecognition = createMockRecognitionWithSuccess('test query', 0.9);
mockRecognition.onresult = (event) => {
  console.log(event.results[0][0].transcript); // 'test query'
  console.log(event.results[0][0].confidence); // 0.9
};
mockRecognition.start();
```

**Global Mock Setup:**
```javascript
import { setupGlobalMockRecognition, cleanupGlobalMockRecognition } from './test/mockSpeechRecognition';

beforeAll(() => {
  setupGlobalMockRecognition();
});

afterAll(() => {
  cleanupGlobalMockRecognition();
});

// Now SpeechRecognition is available globally in tests
const recognition = new SpeechRecognition();
```

## Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Writing Tests

### Component Tests

```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MyComponent from '../components/MyComponent';

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Hook Tests

```javascript
import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useMyHook } from '../hooks/useMyHook';

describe('useMyHook', () => {
  it('should return initial state', () => {
    const { result } = renderHook(() => useMyHook());
    expect(result.current.value).toBe(0);
  });
  
  it('should update state', () => {
    const { result } = renderHook(() => useMyHook());
    act(() => {
      result.current.increment();
    });
    expect(result.current.value).toBe(1);
  });
});
```

### Voice Search Tests

```javascript
import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { createMockRecognition } from '../test/mockSpeechRecognition';
import { useVoiceSearch } from '../hooks/useVoiceSearch';

describe('useVoiceSearch', () => {
  it('should start listening', () => {
    const mockRecognition = createMockRecognition();
    const { result } = renderHook(() => 
      useVoiceSearch({ 
        onTranscript: vi.fn(),
        mockRecognition 
      })
    );
    
    act(() => {
      result.current.startVoiceSearch();
    });
    
    expect(result.current.isListening).toBe(true);
  });
});
```

## Test Coverage

To generate test coverage reports:

```bash
npm run test:coverage
```

Coverage reports will be generated in the `coverage/` directory.

## Best Practices

1. **Test Behavior, Not Implementation**: Focus on what the component does, not how it does it
2. **Use Descriptive Test Names**: Test names should clearly describe what is being tested
3. **Arrange-Act-Assert**: Structure tests with clear setup, action, and assertion phases
4. **Avoid Testing Implementation Details**: Don't test internal state or private methods
5. **Mock External Dependencies**: Use mocks for APIs, timers, and browser APIs
6. **Clean Up After Tests**: Use cleanup functions to prevent test pollution
7. **Test Edge Cases**: Include tests for error conditions and boundary values

## Troubleshooting

### Tests Failing with "element not found"
Make sure to append elements to the document before using `toBeInTheDocument()`:
```javascript
const element = document.createElement('div');
document.body.appendChild(element);
expect(element).toBeInTheDocument();
document.body.removeChild(element); // cleanup
```

### Async Tests Not Working
Use promises or async/await instead of done callbacks:
```javascript
// Good
it('should work', async () => {
  const result = await asyncFunction();
  expect(result).toBe('value');
});

// Also good
it('should work', () => {
  return asyncFunction().then(result => {
    expect(result).toBe('value');
  });
});
```

### Mock Not Working
Make sure to import the mock before the module that uses it:
```javascript
import { createMockRecognition } from './test/mockSpeechRecognition';
import { useVoiceSearch } from './hooks/useVoiceSearch';
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [jest-dom Matchers](https://github.com/testing-library/jest-dom)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
