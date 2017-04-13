import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Button> <Heart />React </Button>
    )
  }
}

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}
const Button = (props) =>
  <button>{props.children}</button>

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}

export default App;
