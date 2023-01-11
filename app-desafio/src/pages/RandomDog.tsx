import * as React from "react";

interface State {
  imageUrl?: string;
}

export class RandomDog extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {};
    this.getRandomDog = this.getRandomDog.bind(this);
  }

  componentDidMount() {
    this.getRandomDog();
  }

  async getRandomDog() {
    const response = await fetch("https://random.dog/woof.json");
    const json = await response.json();
    this.setState({
      imageUrl: json.url
    });
  }

  render() {
    return (
      <div>
        {this.state.imageUrl ? (
          <img src={this.state.imageUrl} alt="Random Dog" />
        ) : (
          <p>Loading...</p>
        )}
        <button onClick={this.getRandomDog}>Refresh</button>
      </div>
    );
  }
}