import { TestWindow } from '@stencil/core/testing';
import { AppWeatherResult } from './app-weather-result';

describe('app-weather-result', () => {
  it('should build', () => {
    expect(new AppWeatherResult()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppWeatherResultElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppWeatherResult],
        html: '<app-weather-result></app-weather-result>'
      });
    });

    it('should not render any content if there is no props', async () => {
      await testWindow.flush();
      expect(element.textContent).toEqual('');
    });


  });
});
