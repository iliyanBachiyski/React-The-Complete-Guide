import React, { Component } from "react";

const asyncFullPost = component => {
  return class extends Component {
    state = {
      comp: null
    };

    componentDidMount() {
      component().then(cmp => {
        this.setState({ comp: cmp.default });
      });
    }

    render() {
      const C = this.state.comp;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncFullPost;
