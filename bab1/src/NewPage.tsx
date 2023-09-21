import React, { Component } from "react";

interface SomethingTodo {
  title: string;
}
interface SomethingToState {
  name: string;
}

class NewPage extends Component<SomethingTodo, SomethingToState> {
  constructor(props: SomethingTodo) {
    super(props);
    this.state = {
      name: "hasael",
    };
  }

  render() {
    const { title } = this.props;
    return (
      <>
        <div>
          <h1>hallo nama saya adalah {this.state.name}</h1>
          <h1>lihat nilai ini di dapat dari parent nya {title}</h1>
          <h1>ini adalah page yang baru saja di buat</h1>
        </div>
      </>
    );
  }
}

export default NewPage;
