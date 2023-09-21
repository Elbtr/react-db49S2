import React, { Component } from "react";
import NewPage from "./NewPage";

interface PriceState {
  mount: number;
  price: number;
  title: string;
}

class App extends Component<object, PriceState> {
  constructor(props: object) {
    super(props);
    this.state = {
      mount: 0,
      price: 0,
      title: "hello world",
    };
  }

  mountShoping() {
    this.setState({
      mount: 200,
      price: 20,
      title: "ganti yang baru",
    });
  }
  resetMountShoping() {
    this.setState({
      mount: 0,
      price: 0,
      title: "nothing",
    });
  }

  render() {
    return (
      <>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              flexDirection: "column",
            }}
          >
            <h1>thank for buy my products</h1>
            <div>
              <h1>detail payment</h1>
              <div>
                <h5>{this.state.title}</h5>
                <h5>{this.state.mount}</h5>
                <h5>{this.state.price}</h5>
              </div>
            </div>
            <button onClick={() => this.resetMountShoping()}>reset</button>
            <button onClick={() => this.mountShoping()}>click</button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h1>tulisa di bawah ini adalah child nya app</h1>
              <NewPage title="new page yang saya buat" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
