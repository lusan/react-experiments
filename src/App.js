import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }

  update(e) {
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.txt} {this.props.cat}</p>
        <Widget update={this.update.bind(this)} />
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update} />

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default txt"
}

export default App;
