# playwright-exercise

## Installation

1. Clone the repository:
   git clone https://github.com/smerdoff/playwright-exercise.git
   cd playwright-exercise

2. Install dependencies:
   npm install

3. Install Playwright browsers:
   npx playwright install

## Run

1. Run all tests:
   npx playwright test

2. Run specific test file:
   npx playwright test tests/specs/productsPageTests.spec.ts

3. Run tests with UI mode (interactive interface to run and debug tests):
   npx playwright test --ui

   In UI mode you can select and run individual tests from the list,
   or click "Run all" to run all tests at once.

4. Run tests in debug mode:
   npx playwright test --debug

## Report

1. View last test report:
   npx playwright show-report

## Decisions & Trade-offs

**Page Object Model**
Pages contain only locators and low-level actions.
Services coordinate page method calls and contain assertions.
This separation keeps tests clean and makes the framework easy to extend —
adding a new page or test scenario doesn't require changing existing code.

**Fixtures**
Used fixtures to handle navigation and privacy popup dismissal before each test.
This avoids code duplication and keeps test files focused on what they actually test.

**URLs config**
All URLs are stored in a single `config/urls.ts` file.
This makes it easy to update base URL or paths in one place without touching page objects.

**Goal**
The overall structure was designed to be flexible and easy to extend —
new pages, services and tests can be added without touching existing code.

## AI Usage

Yes, AI was used throughout this exercise as a learning and productivity tool.

Specifically:

- Routine tasks such as describing elements by locators and writing low-level page actions
- Resolving conflicts and debugging errors
- Search info and explaining Playwright-specific concepts

All architectural decisions and final implementation were reviewed and understood manually.

## What I'd improve or add given more time

- **Reporting** — integrate Allure reporter for more detailed and visual test reports
- **CI/CD** — add GitHub Actions or CircleCI pipeline to run tests automatically on each pull request
- **More tests** — the framework architecture is designed to be easily extendable,
  so adding new test scenarios would require minimal effort
