import { Builder, By, Key, until, WebDriver, WebElement, ThenableWebDriver } from 'selenium-webdriver';

import 'selenium-webdriver/chrome';
import 'selenium-webdriver/firefox';
import 'chromedriver';
import 'geckodriver';

const homeUrl = 'http://localhost:3333/';
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
    await driver.get(homeUrl);
  });

  it('home has profile button', async () => {
    await driver.wait(until.elementLocated(By.css('a>button')));
    const a: WebElement = await driver.findElement(By.css('a>button'));
    const aText = await a.getText();
    expect(aText).toBe('PROFILE PAGE');
  });

  it('get profile page from home', async () => {
    await driver.wait(until.elementLocated(By.css('.app-home a>button')));
    const a: WebElement = await driver.findElement(By.css('.app-home a>button'));
    await a.click();

    await driver.wait(until.elementLocated(By.css('.app-profile p')));
    const p: WebElement = await driver.findElement(By.css('.app-profile p'));
    const pText = await p.getText();
    expect(pText).toBe('Hello! My name is stencil. My name was passed in through a route param!');
  });

  afterAll(async () => {
    await driver.close();
  });

});
