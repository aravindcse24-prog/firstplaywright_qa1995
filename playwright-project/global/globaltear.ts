import { chromium } from "@playwright/test";

async function globalTeardown() {
 console.log('Cleaning up after all tests...');
 // Example: delete test data / logs
}

export default globalTeardown;
