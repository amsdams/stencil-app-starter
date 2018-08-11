import { TestWindow } from '@stencil/core/testing';
import { AppWeatherQuery } from './app-weather-query';

describe('app-weather-query', () => {
  it('should build', () => {
    expect(new AppWeatherQuery()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppWeatherQueryElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppWeatherQuery],
        html: '<app-weather-query></app-weather-query>'
      });
    });

    it('should not render any content if there is no props', async () => {
      await testWindow.flush();
      expect(element.textContent).toEqual('');
    });


  });
});
