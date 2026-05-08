import { test as base, expect } from '@playwright/test';

type wfixture = {
  dataworker: string;
};

// 👇 FIX IS HERE
export const test = base.extend<{}, wfixture>({
  dataworker: [async ({}, use) => {
    const data = "Hello from Worker";
    await use(data);
  }, { scope: 'worker' }]
});

export { expect };