import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

let data = {
  title: 'React-Context',
  message: 'this is sample message.'
}

const SampleContext = React.createContext(data)

class App extends Component {
  render(){
    return(
      <React.Fragment>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <Title />
          <Message />
        </div>
      </React.Fragment>
    )
  }
}

class Title extends Component {
  static contextType = SampleContext

  render(){
    return (
      <div className="card p-2 my-3">
        <h2>{this.context.title}</h2>
      </div>
    )
  }
}

class Message extends Component {
  static contextType = SampleContext

  render(){
    return (
      <div className="alert alert-primary">
        <p>{this.context.message}</p>
      </div>
    )
  }
}

// Form サンプル
class Sample2 extends Component {
  input = ''

  constructor(props) {
    super(props);

    this.state = {
      title: 'input form',
      message: 'type your name.'
    }

    this.doChange = this.doChange.bind(this)
    this.doSubmit = this.doSubmit.bind(this)
  }

  doChange(event) {
    this.input = event.target.value
  }

  doSubmit(event) {
    this.setState({
      title: 'send form',
      message: 'Hello, ' + this.input + '!!'
    })
    event.preventDefault()
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <h4>{this.state.title}</h4>
          <p className="card h5 p-3">{this.state.message}</p>
          <div className="alert alert-primary mt-3">
            <form onSubmit={this.doSubmit}>
              <div className="form-group">
                <label htmlFor="hoge">Message:</label>

                {/* requiredで必須 patternで特定パターンのバリデーション */}
                <input id="hoge" type="text" className="form-control"
                       onChange={this.doChange}
                       required pattern="[A-Za-z _,.]+" />
              </div>
              <input type="submit" className="btn btn-primary" value="Click"/>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function Sample1() {
  return (
      <React.Fragment>
        <button className={"btn btn-danger"}>button</button>
        <Button variant={"primary"} className={"mr-2"}>button</Button>
      </React.Fragment>
  );
}

export default App;
