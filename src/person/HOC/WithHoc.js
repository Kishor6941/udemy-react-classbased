import React from "react";

const WithHoc = (Men) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        gunshots: 0,
      };
    }
    handleGunshot = () => {
      this.setState({
        gunshots: this.state.gunshots + 1,
      });
    };
    render() {
      return (
        <Men
          gunshots={this.state.gunshots}
          handleGunshot={this.handleGunshot}
        />
      );
    }
  }
  return NewComponent;
};

export default WithHoc;
