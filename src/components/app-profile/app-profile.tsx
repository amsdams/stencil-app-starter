import { Component, Prop, Listen, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import '@ionic/core';
//import { RangeValue } from '@ionic/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
})
export class AppProfile {
  @Prop() match: MatchResults;
  @State() rangeState: any = { lower: 10, upper: 90 };
  //@State() rangeState: RangeValue = { lower: 10, upper: 90 };
  @Listen('ionChange')
  protected rangeChanged(event: CustomEvent) {
    const value: any = event.detail.value;
    this.rangeState = value;
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <p>Hello! My name is {this.match.params.name}. My name was passed in through a route param!</p>
          <h2>ion-range value </h2>
          <label>
            {this.rangeState.lower} up to lower {this.rangeState.upper}
          </label>
          <ion-range dualKnobs={true} value={this.rangeState} min={0} max={100} />

          <ion-range value={20} />
          <ion-range value={20} />
          <ion-range value={60} color="light" />
          <ion-range value={80} color="dark" />
          <ion-range pin={true} color="secondary" value={86}>
            <ion-icon size="small" name="ios-sunny-outline" slot="start" />
            <ion-icon name="ios-sunny" slot="end" />
          </ion-range>
          <ion-range pin={true} color="danger" value={54}>
            <ion-icon size="small" name="ios-thermometer-outline" slot="start" />
            <ion-icon name="ios-thermometer" slot="end" />
          </ion-range>
        </div>
      );
    }
  }
}
