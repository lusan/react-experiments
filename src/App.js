import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Parent>
        <div className="childA">sdsa</div>
        <div className="childB">sds</div>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render() {
    let items = this.props.children.map(child => child)
    console.log(items);
    return null;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
