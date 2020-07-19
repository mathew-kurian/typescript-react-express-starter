import React, { Component } from "react";
import config from "../config.json";

export default class App extends Component<
  {
    children?: React.ReactElement;
  },
  {
    title: string;
  }
> {
  state = { title: config?.title };

  render() {
    const title: string = this.state.title;
    var x = title ?? "t";

    if (!!0) {
      return;
    }

    return (
      <div>
        <h1>{title}</h1>
        {this.props.children}
      </div>
    );
  }
}
