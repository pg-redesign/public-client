import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(previousProps) {
    if (this.props.location.pathname === previousProps.location.pathname) {
      // only scroll if moving to different view
      return;
    }

    window.scrollTo(0, 0);
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
