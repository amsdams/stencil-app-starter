import { Builder, By, Key, until, WebDriver, WebElement, ThenableWebDriver } from 'selenium-webdriver';

import 'selenium-webdriver/chrome';
import 'selenium-webdriver/firefox';
import 'chromedriver';
import 'geckodriver';

const profileUrl = 'http://localhost:3333/profile/stencil';
const d: ThenableWebDriver = new Builder().forBrowser('chrome').build();
let driver: WebDriver;

describe('app', () => {
  beforeAll(async () => {
    driver = d;
    await driver
      .manage()
      .window()
      .setPosition(0, 0);
    await driver
      .manage()
      .window()
      .setSize(1280, 1024);
    await driver.get(profileUrl);
  });

  it('home has paragraph', async () => {
    await driver.wait(until.elementLocated(By.css('.app-profile p')));
    const p: WebElement = await driver.findElement(By.css('.app-profile p'));
    const pText = await p.getText();
    expect(pText).toBe('Hello! My name is stencil. My name was passed in through a route param!');
  });

  afterAll(async () => {
    await driver.close();
  });
});
