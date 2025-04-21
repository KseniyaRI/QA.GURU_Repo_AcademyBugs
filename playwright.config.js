import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './specs',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: [['html', { open: 'never' }] , ['allure-playwright']],
  use: {
    trace: 'on-first-retry',
    timeout: 6000000, // Общий таймаут для всех тестов
    expect: {
      timeout: 600000, // Таймаут для каждой проверки
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

