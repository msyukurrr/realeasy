import { test, expect } from '@playwright/test';

let urlProfilePage = "http://localhost:3000/profile";

test.describe('Header area', () => {

    test('The meta tag', async ({ page }) => { 
        await page.goto(urlProfilePage)
        
        const metaDescriptionOne = page.locator('meta[name="description"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Profile page")
    })

    test('The title tag', async({ page }) => {
        await page.goto(urlProfilePage)

        await expect(page).toHaveTitle('RealEasy');
    })
    test('The link tag', async ({ page }) => {
        await page.goto(urlProfilePage)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/logo.png')
    })
})





test('Count number of divs in first content area', async({ page }) => {
    await page.goto(urlProfilePage)

    await expect(page.locator('div')).toHaveCount(21);
})




