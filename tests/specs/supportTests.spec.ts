import { test } from '../fixtures/fixtures';

test.describe('TEST 3. Contact Form Submission', () => {
  test('Success message is displayed after form submission', async ({ supportPage }) => {
    await supportPage.sendSupportMessage(
      'TestUser',
      'testmail@mail.com',
      'TestSubject',
      'TestMessage',
    );
    await supportPage.validateSuccessMessage();
  });
});
