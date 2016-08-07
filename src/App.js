import React, { Component } from 'react';
import marked from 'marked';

import './App.scss';
import Markdown  from './markdown';
import Markup from './markup'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      txt: 'Hello World'
    }
  }

  update(val) {
    this.setState({
      txt: val
    });
  }

  createMarkup() {
    return {__html: marked(this.state.txt, {sanitize: true}) }
	}


  render() {
    return (
      <div className="app">
        <h1>Markdown previewer</h1>
        <h4>A playground for testing out github flavoured markdown</h4>
        <Markdown
          update={this.update.bind(this)}
          value={this.state.txt}
        />
        <Markup
          createMarkup={this.createMarkup.bind(this)}
        />

      </div>
    );
  }
}
