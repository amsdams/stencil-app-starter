import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  componentWillLoad() {
    console.log('Component is about to be rendered');
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

  componentDidUnload() {
    console.log('Component removed from the DOM');
  }

  render() {
    return (
      <div class="container">
        <header>
          <h1>Stencil Weather Fetch Tester</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
