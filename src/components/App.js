import React from "react";
import VotingButtons from "./VotingButtons";

class App extends React.Component {
  constructor(props) {
    super(props);

    const reduxState = this.props.store.getState();

    this.state = {
      selectedButton: reduxState.selectedButton
    };
  }

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.updateFromStore();
    });
    console.log("2. Subscribe to store updates");
  }

  updateFromStore() {
    const { store } = this.props;
    console.log("5.Get updated state from redux store");
    const reduxState = store.getState();

    console.log("6. New value of state is XXX");
    this.setState({
      selectedButton: reduxState.selectedButton
    });
  }

  render() {
    return (
      <div>
        <VotingButtons
          selectedButton={this.state.selectedButton}
          dispatch={this.props.store.dispatch}
        />
      </div>
    );
  }
}

export default App;
