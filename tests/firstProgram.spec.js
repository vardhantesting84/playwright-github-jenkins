import { test, expect } from '@playwright/test';

test('Test Case 1',async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('textbox', { name: 'Enter Name' }).fill('Sachin');
    await page.getByRole('textbox', { name: 'Enter EMail' }).fill('sachin@gmail.com');
    await page.getByText('Wednesday').click();
    await page.getByLabel('Country:').selectOption('germany');
    await page.getByLabel('Colors:').selectOption('blue');
    await page.getByLabel('Colors:').selectOption('yellow');
    await page.locator('#blog-pager').getByRole('link', { name: 'Home' }).click();
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Confirmation Alert' }).click();
    await page.waitForTimeout(3000)
});

test('Test Case 2', async ({ page }) => {
  await page.goto('https://practice.bpbonline.com/');
  await page.getByRole('button', { name: 'My Account' }).click();
  await page.locator('input[name="email_address"]').fill('bpb@bpb.com');
  await page.locator('input[name="password"]').fill('bpb@123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByRole('heading', { name: 'My Account Information' })).toBeVisible();
  await expect(page.locator('h1')).toContainText('My Account Information');
});


// /Users/vardhan/Documents/Training/Playwright/SFJ2/Projects/tcs-playwright/tests/playwright-github-jenkins/tests/firstProgram.spec.js