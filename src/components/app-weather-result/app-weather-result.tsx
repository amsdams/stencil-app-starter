import { Component, Prop } from '@stencil/core';
import { Model200 } from '../../services/model/weather/models';

@Component({
  tag: 'app-weather-result',
  styleUrl: 'app-weather-result.css',
})
export class AppWeatherResult {
  @Prop() weather: Model200;

  render() {
    if (this.weather) {
      const date: Date = new Date(this.weather.dt * 1000);
      return (
        <div class="app-weather-result container">
          <p>
            <table class="table">
              <tr>
                <th>Key</th>
                <th>Val</th>
              </tr>
              <tr>
                <td>dt</td>
                <td>{date.toString()}</td>
              </tr>
              <tr>
                <td>id</td>
                <td>{this.weather.id}</td>
              </tr>
              <tr>
                <td>name</td>
                <td>{this.weather.name}</td>
              </tr>
              <tr>
                <td>visibility</td>
                <td>{this.weather.visibility}</td>
              </tr>
              <tr>
                <td>main.temp</td>
                <td>{this.weather.main.temp}</td>
              </tr>
              <tr>
                <td>main.temp_max</td>
                <td>{this.weather.main.temp_max}</td>
              </tr>
              <tr>
                <td>main.temp_min</td>
                <td>{this.weather.main.temp_min}</td>
              </tr>

              <tr>
                <td>main.pressure</td>
                <td>{this.weather.main.pressure}</td>
              </tr>
              <tr>
                <td>main.humidity</td>
                <td>{this.weather.main.humidity}</td>
              </tr>
            </table>
          </p>
        </div>
      );
    }
  }
}
