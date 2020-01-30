import phonebook from 'ic:canisters/phonebook';
import * as React from 'react';
import { render } from 'react-dom';

class Phonebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Default',
      message: '',
    };
  }

  async doGreet() {
    const greeting = await phonebook.greet(this.state.name);
    this.setState({ ...this.state, message: greeting });
  }

  onNameChange(ev) {
    this.setState({ ...this.state, name: ev.target.value });
  }

  render() {
    return (
      <div>
        <div>
          Greetings, DFINITY-ite. Type in your name:
          <input id="name" value={this.state.name} onChange={ev => this.onNameChange(ev)}></input>
          <button onClick={() => this.doGreet()}>Click Button Get Greeting!</button>
        </div>
        <div>Greeting is: "<span style={{ "color": "blue" }}>{this.state.message}</span>"</div>
      </div>
    );
  }
}

render(<Phonebook />, document.getElementById('app'));
