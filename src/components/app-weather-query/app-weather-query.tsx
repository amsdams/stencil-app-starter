import { Component, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-weather-query',
  styleUrl: 'app-weather-query.css',
})
export class AppWeatherQuery {
  @Prop() defaultQ: string;
  @State() q: string = this.defaultQ;
  @Event() qChanged: EventEmitter;

  qChangedHandler(q: string) {
    this.qChanged.emit(q);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.q);
    // send data to our backend
    // this.getData();
    this.qChangedHandler(this.q);
  }

  handleReset(e) {
    e.preventDefault();
    console.log(this.q);
    this.q = this.defaultQ;

    //this.getData();
    this.qChangedHandler(this.q);
  }

  handleChange(event) {
    this.q = event.target.value;
  }

  componentWillLoad() {
    console.log('Component is about to be rendered');
    this.q = this.defaultQ;
  }

  componentDidLoad() {
    console.log('Component has been rendered');
  }

  componentWillUpdate() {
    console.log('Component will update and re-render');
  }

  componentDidUpdate() {
    console.log('Component did update');
  }

  render() {
    return (
      <div class="app-weather-query container">
        <p>
          <form onReset={e => this.handleReset(e)} onSubmit={e => this.handleSubmit(e)}>
            <div class="form-group row">
              <div class="col-5" />
              <label class="col-2">q</label>
              <div class="col-5" />
            </div>
            <div class="form-group row">
              <div class="col-4" />
              <div class="col-4">
                <input
                  aria-describedby="qHelp"
                  placeholder="Enter q"
                  type="text"
                  class="form-control"
                  name="q"
                  value={this.q}
                  onInput={event => this.handleChange(event)}
                />
                <small id="qHelp" class="form-text text-muted">
                  We'll never share your q with anyone else.
                </small>
              </div>
              <div class="col-4" />
            </div>
              <div class="form-group row">
                <div class="col-4" />
                <div class="col-2">
                  <input type="reset" class="btn btn-secondary" value="Reset" />
                </div>
                <div class="col-2">
                  <input type="submit" class="btn btn-primary" value="Submit" />

                </div>
                <div class="col-4" />
              </div>

          </form>
        </p>
      </div>
    );
  }
}
