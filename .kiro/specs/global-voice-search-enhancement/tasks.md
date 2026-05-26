# Implementation Plan: Global Voice Search Enhancement

## Overview

This implementation plan transforms the Tax Handbook's voice search from a header-only feature into a globally-available, robust system with improved reliability and user experience. The implementation follows a 7-phase approach, building incrementally from core infrastructure through to accessibility and testing.

**Technology Stack**: JavaScript, React 19.1.1, React Router DOM 6.28.0, Vite 7.1.2, Web Speech API

**Implementation Language**: JavaScript (matching existing codebase)

## Tasks

- [-] 1. Set up testing infrastructure
  - Install Vitest and React Testing Library
  - Configure Vitest in vite.config.js
  - Create test setup file with jsdom environment
  - Create mock SpeechRecognition utility for testing
  - _Requirements: 14.1, 14.2, 14.5_

- [ ] 2. Phase 1: Core Infrastructure - Create useVoiceSearch Hook
  - [ ] 2.1 Create useVoiceSearch hook with core functionality
    - Create `tax_hanbook/src/hooks/useVoiceSearch.js`
    - Implement state management (isListening, voiceError, voiceSupported, interimTranscript, finalTranscript, confidence)
    - Implement browser compatibility detection (SpeechRecognition / webkitSpeechRecognition)
    - Implement startVoiceSearch function with recognition initialization
    - Implement stopVoiceSearch function with cleanup
    - Configure recognition options (language, continuous, interimResults, maxAlternatives)
    - Handle all recognition events (onstart, onend, onresult, onerror)
    - Implement auto-clear error after 3.5 seconds
    - Implement cleanup on unmount using useEffect
    - Support mock recognition for testing
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 3.3, 3.4, 3.6, 14.1_

  - [ ]* 2.2 Write unit tests for useVoiceSearch hook
    - Create `tax_hanbook/src/__tests__/useVoiceSearch.test.js`
    - Test state transitions (idle → listening → processing → success/error)
    - Test startVoiceSearch and stopVoiceSearch functions
    - Test error handling for all error types (not-allowed, no-speech, network, etc.)
    - Test cleanup on unmount
    - Test callback invocation with correct parameters
    - Test browser compatibility detection
    - Test auto-clear error timeout
    - Test mock recognition support
    - _Requirements: 1.1-1.9, 14.1-14.6_

  - [ ] 2.3 Create VoiceSearchContext provider
    - Create `tax_hanbook/src/contexts/VoiceSearchContext.jsx`
    - Implement VoiceSearchProvider component using useVoiceSearch hook
    - Implement global state management (isListening, voiceError, voiceSupported, interimTranscript, finalTranscript, confidence, language)
    - Implement startVoiceSearch function that accepts callback parameter
    - Implement stopVoiceSearch function
    - Implement setLanguage function
    - Implement clearError function
    - Store active callback in ref to prevent simultaneous activations
    - Add error boundary for context usage validation
    - Support testMode prop for testing
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 14.2_

  - [ ]* 2.4 Write unit tests for VoiceSearchContext
    - Create `tax_hanbook/src/__tests__/VoiceSearchContext.test.jsx`
    - Test context provider initialization
    - Test global state management
    - Test callback storage and invocation
    - Test prevention of simultaneous activations
    - Test language switching
    - Test error handling
    - Test testMode functionality
    - _Requirements: 2.1-2.6, 14.2-14.6_

  - [ ] 2.5 Integrate VoiceSearchProvider in App.jsx
    - Open `tax_hanbook/src/App.jsx`
    - Import VoiceSearchProvider
    - Wrap application root with VoiceSearchProvider
    - Ensure provider is above Router but below other necessary providers
    - _Requirements: 2.5_

- [ ] 3. Checkpoint - Verify core infrastructure
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Phase 2: Enhanced Recognition Configuration
  - [ ] 4.1 Add multi-language support to voice recognition
    - Update useVoiceSearch hook to accept language parameter
    - Integrate with existing LanguageContext
    - Create language mapping (en → en-US, fr → fr-FR, rw → rw-RW)
    - Update VoiceSearchContext to sync with LanguageContext
    - Update recognition configuration to use mapped language
    - _Requirements: 3.1, 3.2_

  - [ ] 4.2 Implement interim results display
    - Update useVoiceSearch to capture interim results from recognition events
    - Store interim transcript in state
    - Implement debouncing for interim results (100ms) to prevent excessive re-renders
    - Update VoiceSearchContext to expose interimTranscript
    - _Requirements: 3.4, 3.5, 12.6_

  - [ ] 4.3 Add confidence scoring and low-confidence handling
    - Extract confidence score from recognition results
    - Store confidence in state
    - Implement low-confidence prompt (< 0.7) logic
    - Update VoiceSearchContext to expose confidence
    - _Requirements: 3.7_

  - [ ]* 4.4 Write integration tests for enhanced recognition
    - Test multi-language switching
    - Test interim results capture and debouncing
    - Test confidence scoring
    - Test low-confidence handling
    - _Requirements: 3.1-3.7_

- [ ] 5. Phase 3: Global Access Components
  - [ ] 5.1 Create GlobalKeyboardShortcut component
    - Create `tax_hanbook/src/components/GlobalKeyboardShortcut.jsx`
    - Implement global keydown event listener (Ctrl+Shift+K / Cmd+Shift+K)
    - Detect Mac vs Windows/Linux using navigator.platform
    - Check if focus is in input/textarea and disable shortcut
    - Toggle voice search on/off using context
    - Clean up event listener on unmount
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.6, 4.7_

  - [ ]* 5.2 Write unit tests for GlobalKeyboardShortcut
    - Create `tax_hanbook/src/__tests__/GlobalKeyboardShortcut.test.jsx`
    - Test keyboard event handling
    - Test input field detection
    - Test Mac vs Windows/Linux key detection
    - Test cleanup on unmount
    - _Requirements: 4.1-4.7_

  - [ ] 5.3 Create FloatingVoiceButton component
    - Create `tax_hanbook/src/components/FloatingVoiceButton.jsx`
    - Create `tax_hanbook/src/components/FloatingVoiceButton.css`
    - Implement fixed positioning (bottom-right, z-index 1000)
    - Add position prop (bottom-right, bottom-left)
    - Add hideOnMobile prop (default true, hidden < 768px)
    - Add showBadge prop for keyboard shortcut display
    - Implement click handler that triggers voice search and navigates to search results
    - Add smooth transitions and box shadow
    - Use VoiceSearchButton component internally
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

  - [ ]* 5.4 Write unit tests for FloatingVoiceButton
    - Create `tax_hanbook/src/__tests__/FloatingVoiceButton.test.jsx`
    - Test positioning
    - Test responsive behavior (mobile hiding)
    - Test navigation on transcript
    - Test badge display
    - _Requirements: 7.1-7.6_

  - [ ] 5.5 Integrate GlobalKeyboardShortcut in App.jsx
    - Import GlobalKeyboardShortcut component
    - Add component inside VoiceSearchProvider
    - Verify keyboard shortcut works globally
    - _Requirements: 4.6_

- [ ] 6. Checkpoint - Verify global access features
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Phase 4: UI Components
  - [ ] 7.1 Create VoiceSearchButton component
    - Create `tax_hanbook/src/components/VoiceSearchButton.jsx`
    - Create `tax_hanbook/src/components/VoiceSearchButton.css`
    - Implement size prop (small, medium, large)
    - Implement variant prop (icon-only, with-label)
    - Display Mic icon when idle, MicOff icon when listening
    - Implement pulsing rings animation for listening state
    - Add disabled state styling when voiceSupported is false
    - Add ARIA labels (aria-label, aria-pressed, role="button")
    - Add tooltip with usage instructions
    - Ensure minimum touch target size (44x44px)
    - Implement click handler using context
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 13.7_

  - [ ]* 7.2 Write unit tests for VoiceSearchButton
    - Create `tax_hanbook/src/__tests__/VoiceSearchButton.test.jsx`
    - Test rendering in different states (idle, listening, disabled)
    - Test size and variant props
    - Test click interactions
    - Test accessibility attributes
    - Test animations
    - _Requirements: 5.1-5.9, 13.1-13.7_

  - [ ] 7.3 Create VoiceSearchFeedback component
    - Create `tax_hanbook/src/components/VoiceSearchFeedback.jsx`
    - Create `tax_hanbook/src/components/VoiceSearchFeedback.css`
    - Implement listening state display ("Listening..." + waveform animation)
    - Implement interim transcript display
    - Implement processing state display (spinner)
    - Implement success state display (checkmark + final transcript, 1 second)
    - Implement error state display (error icon + error message)
    - Implement color coding (blue: listening, gray: processing, green: success, red: error)
    - Add waveform animation using CSS
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7_

  - [ ]* 7.4 Write unit tests for VoiceSearchFeedback
    - Create `tax_hanbook/src/__tests__/VoiceSearchFeedback.test.jsx`
    - Test all display states
    - Test color coding
    - Test animations
    - _Requirements: 8.1-8.7_

  - [ ] 7.5 Update Header.jsx to use new components
    - Open `tax_hanbook/src/components/Header.jsx`
    - Import VoiceSearchButton and VoiceSearchFeedback
    - Import useVoiceSearchContext hook
    - Replace inline voice search implementation with VoiceSearchButton
    - Remove local voice search state (isListening, voiceError, recognitionRef)
    - Remove handleVoiceSearch function
    - Use context state and functions instead
    - Add VoiceSearchFeedback component to display feedback
    - Keep existing search functionality intact
    - Remove voice search CSS (moved to component files)
    - _Requirements: 5.1-5.9, 8.1-8.7_

  - [ ] 7.6 Add VoiceSearchButton to SearchResults page
    - Open `tax_hanbook/src/pages/SearchResults.jsx`
    - Import VoiceSearchButton and VoiceSearchFeedback
    - Add VoiceSearchButton to search input area
    - Implement onTranscript callback to update search query and execute new search
    - Add VoiceSearchFeedback component for visual feedback
    - Display error messages near search input
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [ ] 7.7 Add FloatingVoiceButton to content pages
    - Identify main content page components (e.g., ContentPages, Introduction, etc.)
    - Import FloatingVoiceButton
    - Add FloatingVoiceButton component to each content page
    - Configure position and visibility props
    - Verify floating button appears and functions correctly
    - _Requirements: 7.1-7.6_

- [ ] 8. Checkpoint - Verify UI components integration
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 9. Phase 5: Error Handling and Permissions
  - [ ] 9.1 Create PermissionDialog component
    - Create `tax_hanbook/src/components/PermissionDialog.jsx`
    - Create `tax_hanbook/src/components/PermissionDialog.css`
    - Implement modal dialog UI
    - Add explanation of why microphone permission is needed
    - Add browser-specific instructions (Chrome, Firefox, Safari, Edge)
    - Add visual guide with icons/screenshots
    - Add "Try Again" button that calls onRetry callback
    - Add "Cancel" button that calls onClose callback
    - Implement modal overlay and focus trap
    - _Requirements: 9.1, 9.2, 9.3_

  - [ ]* 9.2 Write unit tests for PermissionDialog
    - Create `tax_hanbook/src/__tests__/PermissionDialog.test.jsx`
    - Test dialog rendering
    - Test button interactions
    - Test modal behavior
    - _Requirements: 9.1-9.3_

  - [ ] 9.3 Enhance error handling in useVoiceSearch
    - Update error handler to map all error codes to user-friendly messages
    - Implement error code mapping (not-allowed, permission-denied, no-speech, audio-capture, network, not-supported, aborted, service-not-allowed)
    - Add recovery actions for each error type
    - Implement permission status detection
    - Add logic to show PermissionDialog for permission errors
    - _Requirements: 1.6, 9.4, 9.5_

  - [ ] 9.4 Add browser compatibility detection and messaging
    - Update voiceSupported detection in useVoiceSearch
    - Add informational message component for unsupported browsers
    - List supported browsers (Chrome, Edge, Safari, Opera)
    - Hide voice search buttons when not supported
    - Implement graceful degradation
    - Handle iOS Safari (webkitSpeechRecognition)
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6_

  - [ ] 9.5 Integrate PermissionDialog with VoiceSearchContext
    - Add permission dialog state to VoiceSearchContext
    - Show PermissionDialog when permission errors occur
    - Implement retry logic that re-attempts voice search
    - Update permission status when dialog is dismissed
    - _Requirements: 9.1-9.6_

- [ ] 10. Phase 6: Analytics and Performance
  - [ ] 10.1 Integrate analytics tracking
    - Create `tax_hanbook/src/utils/voiceSearchUtils.js` with analytics helper functions
    - Implement logAnalytics function that sends events to analytics service
    - Add "voice_search_started" event logging in VoiceSearchContext
    - Add "voice_search_success" event logging with transcript length and confidence
    - Add "voice_search_error" event logging with error type
    - Add "voice_search_cancelled" event logging with duration
    - Track page location, language, and timestamp for all events
    - Integrate with existing analytics service (gtag or custom)
    - Add console logging in development mode
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7_

  - [ ] 10.2 Optimize performance
    - Implement recognition instance reuse in VoiceSearchContext
    - Add lazy initialization (create instance only when needed)
    - Verify debouncing for interim results (100ms)
    - Optimize cleanup timing (< 500ms)
    - Use useMemo and useCallback to prevent unnecessary re-renders
    - Measure initialization time and ensure < 100ms target
    - Measure audio capture start time and ensure < 200ms target
    - Measure search execution time and ensure < 50ms target
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 12.6_

  - [ ]* 10.3 Add performance monitoring
    - Add performance measurement utilities
    - Track and log performance metrics in development
    - Monitor memory usage and cleanup
    - _Requirements: 12.1-12.6_

- [ ] 11. Phase 7: Accessibility and Testing
  - [ ] 11.1 Enhance accessibility features
    - Add aria-live regions to VoiceSearchFeedback for screen reader announcements
    - Verify all ARIA labels are present and correct (aria-label, aria-pressed, role)
    - Implement keyboard navigation for all components
    - Add visible focus indicators to all interactive elements
    - Test with high contrast mode
    - Verify minimum touch target sizes (44x44px)
    - Add screen reader announcements for state changes
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7_

  - [ ]* 11.2 Write accessibility tests
    - Test ARIA attributes
    - Test keyboard navigation
    - Test focus management
    - Test screen reader announcements
    - _Requirements: 13.1-13.7_

  - [ ] 11.3 Add test mode support
    - Update VoiceSearchProvider to accept testMode prop
    - Implement mock recognition service for test mode
    - Add predefined transcript injection
    - Add simulated error conditions
    - Make operations synchronous in test mode
    - Add state inspection utilities
    - _Requirements: 14.2, 14.3, 14.4, 14.5_

  - [ ]* 11.4 Write integration tests
    - Test voice search from header → search results navigation
    - Test voice search from content page → floating button → search results
    - Test keyboard shortcut activation → voice search → transcript display
    - Test error recovery flow → permission denied → dialog → retry
    - Test language switching → recognition language update
    - Test multiple component instances → single recognition instance
    - _Requirements: 1.1-14.6_

  - [ ]* 11.5 Create manual testing checklist document
    - Document browser compatibility testing steps (Chrome, Edge, Safari)
    - Document microphone permission flow testing
    - Document keyboard shortcut testing (Windows, Mac, Linux)
    - Document floating button testing
    - Document visual feedback testing
    - Document error message testing
    - Document accessibility testing with screen readers (NVDA, JAWS, VoiceOver)
    - Document mobile responsiveness testing
    - Document multi-language testing
    - Document analytics event verification
    - _Requirements: 1.1-14.6_

- [ ] 12. Final checkpoint and cleanup
  - [ ] 12.1 Remove old voice search code
    - Remove any remaining inline voice search implementation from Header.jsx
    - Remove unused voice search CSS
    - Clean up imports
    - _Requirements: All_

  - [ ] 12.2 Update documentation
    - Add JSDoc comments to all new functions and components
    - Update README with voice search feature description
    - Document keyboard shortcuts
    - Document browser compatibility
    - _Requirements: All_

  - [ ] 12.3 Final verification
    - Run all tests and ensure they pass
    - Test in Chrome, Edge, and Safari
    - Test on mobile devices
    - Test with screen readers
    - Verify analytics events are logged
    - Verify performance targets are met
    - _Requirements: All_

- [ ] 13. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Implementation uses JavaScript (matching existing codebase)
- All new components follow existing project structure and conventions
- Voice search integrates with existing LanguageContext and analytics service
- Testing infrastructure must be set up first to enable test-driven development
- Performance optimization is critical for good user experience
- Accessibility compliance ensures the feature is usable by all users

## Testing Strategy

- **Unit Tests**: Test individual components and hooks in isolation
- **Integration Tests**: Test component interactions and data flow
- **Manual Tests**: Test browser compatibility, accessibility, and user experience
- **Performance Tests**: Measure and verify performance targets

## Migration Strategy

1. Create new components alongside existing implementation
2. Test new components in isolation
3. Gradually replace Header.jsx implementation
4. Add new features (floating button, keyboard shortcuts)
5. Remove old code
6. Update documentation

## Success Criteria

- All unit tests pass
- Voice search works in Chrome, Edge, and Safari
- Keyboard shortcut works on all platforms
- Floating button appears on content pages
- Visual feedback is clear and responsive
- Error messages are helpful and accurate
- Accessibility with screen readers works correctly
- Mobile responsiveness (floating button hidden < 768px)
- Multi-language support works (en-US, fr-FR, rw-RW)
- Analytics events are logged correctly
- Performance targets are met (initialization < 100ms, audio capture < 200ms, search < 50ms)
