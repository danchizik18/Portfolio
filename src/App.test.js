// Simple test to verify the app can be imported without errors
import App from './App';

test('app component can be imported', () => {
  expect(App).toBeDefined();
  expect(typeof App).toBe('function');
});
