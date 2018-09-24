import * as React from 'react';

interface ISelectorProps { }

interface ISelectorState { }

export default class Selector extends React.PureComponent<ISelectorProps, ISelectorState> {
  public render() {
    return (
      <span>Body</span>
    );
  }
}