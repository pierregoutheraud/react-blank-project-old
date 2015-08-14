import React, { Component } from 'react';
import RVC from 'components/RVC.jsx';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from 'stores';

const redux = createRedux(stores);

export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() =>
          <RVC
            video_id="71"
            autoplay={true}
            sources={[
              'http://www.html5rocks.com/en/tutorials/video/basics/devstories.webm'
            ]}
          />
        }
      </Provider>
    );
  }
}

let placeholder = document.querySelector('.video-placeholder');
React.render(
  <App />,
  placeholder
);
