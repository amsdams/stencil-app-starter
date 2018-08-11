import { Component, State, Listen, Prop } from '@stencil/core';
import * as weather from '../../services/weather';
import { WeatherRequest } from '../../services/model/weather-request';
import { Model200 } from '../../services/model/weather/models';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @State() weatherByQ: Model200;
  @State() weatherByID: Model200;
  @Prop() defaultQ: string = 'Amsterdam';
  @Listen('qChanged')
  qChangedHandler(event: CustomEvent) {
    console.log('Received the custom todoCompleted event: ', event.detail);
    this.getData(event.detail);
  }

  async getWeatherByQ(q: string) {
    const weatherRequest: WeatherRequest = weather.getRequest(q);
    const weatherQuery: string = weather.getQuery(weatherRequest);
    console.log('weatherQuery', weatherQuery);
    this.weatherByQ = await weather.getResponse(weatherQuery);
    console.log('test q', this.weatherByQ);
  }

  async getWeatherByID(id: number) {
    const weatherRequest: WeatherRequest = weather.getRequest(null, id.toString());
    const weatherQuery: string = weather.getQuery(weatherRequest);
    console.log('weatherQuery', weatherQuery);
    this.weatherByID = await weather.getResponse(weatherQuery);
    console.log('test id', this.weatherByID);
  }

  async getData(q: string) {
    await this.getWeatherByQ(q);
    const id = await this.weatherByQ.id;
    await this.getWeatherByID(id);
  }
  componentWillLoad() {
    console.log('Component is about to be rendered');
  }

  componentDidLoad() {
    console.log('Component has been rendered');
    this.getData(this.defaultQ);
  }

  componentWillUpdate() {
    console.log('Component will update and re-render');
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  componentDidUnload() {
    console.log('Component removed from the DOM');
  }

  render() {
    console.log('Component render', this);
    //if (this.weatherByQ && this.weatherByID) {
    return (
      <div class="app-home container">
        <p>
          <app-weather-query defaultQ="Amsterdam" />
        </p>
        <p>
          <app-weather-result weather={this.weatherByQ} />
        </p>
        <p>
          <app-weather-result weather={this.weatherByID} />
        </p>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
    /*}else{
      return (<p>did not get all data</p>)
    }*/
  }
}
