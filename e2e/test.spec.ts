import { test, expect } from '@playwright/test';

let urlHomePage = "http://localhost:3000";
let urlListingPage = "http://localhost:3000/listing";

test.describe('Header area', () => {

    test('The meta tag', async ({ page }) => { 
        await page.goto(urlHomePage)
        
        const metaDescriptionOne = page.locator('meta[name="description"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Generated by create next app")
    })
    test('The title tag', async({ page }) => {
        await page.goto(urlHomePage)

        await expect(page).toHaveTitle('RealEasy');
    })
    test('The link tag', async ({ page }) => {
        await page.goto(urlHomePage)
    
        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/logo.png')
    })
})


test.describe('Button tests', () => {
    test('this is button test', async ({page}) => {
        await page.goto(urlHomePage);
        await expect(page.locator('button')).toContainText("Find an Agent");
    })
    test('Should contain a list to describe CRUD', async ({ page }) => {
        await page.goto(urlHomePage);
        await expect(page.locator('h3')).toContainText(["New listings near you"]);
    })
})

test.describe('Linking to another page', () => {
    test("Should contain a link to about page", async ({ page }) => {
        await page.goto(urlHomePage);
        await page.click('text=See more...');
        await expect(page).toHaveURL(urlListingPage);
    })
})

