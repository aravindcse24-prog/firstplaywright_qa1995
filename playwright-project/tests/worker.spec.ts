import { test, expect } from '../fixture/workerfix';  // ✅ IMPORTANT

test('demo', async ({ dataworker }) => {
  console.log(dataworker);
  expect(dataworker).toBe('Hello from Worker');
});