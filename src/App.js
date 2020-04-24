import React, { useEffect, useState } from 'react';
import axios from 'axios';

class App extends React.Component {
  state = { tests: [] };
  componentDidMount() {
    axios('http://charity-cms.m3ntorship.net/tests').then(({ data: tests }) => {
      this.setState({ tests });
    });
  }

  render() {
    return this.state.tests.map(({ name }) => <div key={name}>{name}</div>);
  }
}

const AppHooks = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    axios('http://charity-cms.m3ntorship.net/tests').then(({ data: tests }) => {
      setTests(tests);
    });
  }, []);

  return tests.map(({ name }) => <div key={name}>{name}</div>);
};

export { AppHooks, App };
