/**
 * Mock SpeechRecognition for testing voice search functionality
 * 
 * This mock provides a complete implementation of the Web Speech API's
 * SpeechRecognition interface for testing purposes.
 * 
 * Usage:
 * ```javascript
 * import { createMockRecognition } from './test/mockSpeechRecognition';
 * 
 * const mockRecognition = createMockRecognition();
 * // Use in tests
 * ```
 */

export class MockSpeechRecognition {
  constructor() {
    // Configuration properties
    this.continuous = false;
    this.interimResults = false;
    this.lang = 'en-US';
    this.maxAlternatives = 1;
    
    // Event handlers
    this.onstart = null;
    this.onend = null;
    this.onresult = null;
    this.onerror = null;
    this.onaudiostart = null;
    this.onaudioend = null;
    this.onsoundstart = null;
    this.onsoundend = null;
    this.onspeechstart = null;
    this.onspeechend = null;
    this.onnomatch = null;
    
    // Internal state
    this._isStarted = false;
    this._isAborted = false;
  }
  
  /**
   * Start speech recognition
   */
  start() {
    if (this._isStarted) {
      throw new Error('Recognition has already started');
    }
    
    this._isStarted = true;
    this._isAborted = false;
    
    // Simulate async start event
    setTimeout(() => {
      if (this.onstart && !this._isAborted) {
        this.onstart(new Event('start'));
      }
    }, 0);
  }
  
  /**
   * Stop speech recognition
   */
  stop() {
    if (!this._isStarted) {
      return;
    }
    
    this._isStarted = false;
    
    // Simulate async end event
    setTimeout(() => {
      if (this.onend && !this._isAborted) {
        this.onend(new Event('end'));
      }
    }, 0);
  }
  
  /**
   * Abort speech recognition
   */
  abort() {
    if (!this._isStarted) {
      return;
    }
    
    this._isStarted = false;
    this._isAborted = true;
    
    // Simulate async end event
    setTimeout(() => {
      if (this.onend) {
        this.onend(new Event('end'));
      }
    }, 0);
  }
  
  /**
   * Simulate a successful recognition result
   * @param {string} transcript - The recognized text
   * @param {number} confidence - Confidence score (0-1)
   * @param {boolean} isFinal - Whether this is a final result
   */
  simulateResult(transcript, confidence = 1.0, isFinal = true) {
    if (!this._isStarted) {
      throw new Error('Recognition must be started before simulating results');
    }
    
    const result = {
      isFinal,
      [0]: {
        transcript,
        confidence,
      },
      length: 1,
    };
    
    const event = {
      results: [result],
      resultIndex: 0,
    };
    
    if (this.onresult) {
      this.onresult(event);
    }
    
    // Auto-stop after final result if not continuous
    if (isFinal && !this.continuous) {
      this.stop();
    }
  }
  
  /**
   * Simulate an error
   * @param {string} error - Error type (e.g., 'no-speech', 'not-allowed', 'network')
   * @param {string} message - Error message
   */
  simulateError(error, message = '') {
    if (!this._isStarted) {
      throw new Error('Recognition must be started before simulating errors');
    }
    
    const event = {
      error,
      message,
    };
    
    if (this.onerror) {
      this.onerror(event);
    }
    
    // Stop after error
    this.stop();
  }
  
  /**
   * Simulate interim results (real-time transcription)
   * @param {string} transcript - The interim text
   * @param {number} confidence - Confidence score (0-1)
   */
  simulateInterimResult(transcript, confidence = 0.8) {
    this.simulateResult(transcript, confidence, false);
  }
  
  /**
   * Simulate multiple alternatives
   * @param {Array<{transcript: string, confidence: number}>} alternatives
   * @param {boolean} isFinal
   */
  simulateMultipleAlternatives(alternatives, isFinal = true) {
    if (!this._isStarted) {
      throw new Error('Recognition must be started before simulating results');
    }
    
    const result = {
      isFinal,
      length: alternatives.length,
    };
    
    alternatives.forEach((alt, index) => {
      result[index] = {
        transcript: alt.transcript,
        confidence: alt.confidence,
      };
    });
    
    const event = {
      results: [result],
      resultIndex: 0,
    };
    
    if (this.onresult) {
      this.onresult(event);
    }
    
    // Auto-stop after final result if not continuous
    if (isFinal && !this.continuous) {
      this.stop();
    }
  }
  
  /**
   * Check if recognition is currently active
   */
  get isStarted() {
    return this._isStarted;
  }
}

/**
 * Create a new mock SpeechRecognition instance
 * @returns {MockSpeechRecognition}
 */
export function createMockRecognition() {
  return new MockSpeechRecognition();
}

/**
 * Setup global mock for SpeechRecognition
 * Call this in test setup to mock the browser API
 */
export function setupGlobalMockRecognition() {
  global.SpeechRecognition = MockSpeechRecognition;
  global.webkitSpeechRecognition = MockSpeechRecognition;
}

/**
 * Cleanup global mock for SpeechRecognition
 * Call this in test teardown
 */
export function cleanupGlobalMockRecognition() {
  delete global.SpeechRecognition;
  delete global.webkitSpeechRecognition;
}

/**
 * Helper to create a mock recognition with predefined behavior
 * @param {Object} options
 * @param {string} options.transcript - Transcript to return
 * @param {number} options.confidence - Confidence score
 * @param {string} options.error - Error to simulate
 * @param {number} options.delay - Delay before result/error (ms)
 * @returns {MockSpeechRecognition}
 */
export function createMockRecognitionWithBehavior(options = {}) {
  const mock = createMockRecognition();
  const originalStart = mock.start.bind(mock);
  
  mock.start = function() {
    originalStart();
    
    const delay = options.delay || 100;
    
    setTimeout(() => {
      if (options.error) {
        mock.simulateError(options.error, options.errorMessage || '');
      } else {
        const transcript = options.transcript || 'test transcript';
        const confidence = options.confidence !== undefined ? options.confidence : 1.0;
        mock.simulateResult(transcript, confidence, true);
      }
    }, delay);
  };
  
  return mock;
}

/**
 * Helper to test error scenarios
 * @param {string} errorType - Type of error to simulate
 * @returns {MockSpeechRecognition}
 */
export function createMockRecognitionWithError(errorType) {
  return createMockRecognitionWithBehavior({ error: errorType });
}

/**
 * Helper to test successful recognition
 * @param {string} transcript - Transcript to return
 * @param {number} confidence - Confidence score
 * @returns {MockSpeechRecognition}
 */
export function createMockRecognitionWithSuccess(transcript, confidence = 1.0) {
  return createMockRecognitionWithBehavior({ transcript, confidence });
}

export default MockSpeechRecognition;
