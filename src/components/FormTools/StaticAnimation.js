import React, { Component } from "react";
import PropTypes from "prop-types";
import { Transition } from "semantic-ui-react";

class StaticAnimation extends Component {
  static propTypes = {
    animate: PropTypes.bool,
    duration: PropTypes.number,
    children: PropTypes.element.isRequired,
    animation: PropTypes.oneOf([
      "jiggle",
      "flash",
      "shake",
      "pulse",
      "tada",
      "bounce",
      "glow",
    ]).isRequired,
  };

  static defaultProps = {
    duration: 500,
    animation: "shake",
  };

  state = {
    visible: true,
  };

  componentDidUpdate = previousProps => {
    const { animate } = this.props;

    if (animate && !previousProps.animate) {
      this.animateChildren();
    }
  };

  animateChildren = () => this.setState(state => ({ visible: !state.visible }));

  render = () => {
    const { visible } = this.state;
    const { animation, duration, children } = this.props;

    return (
      <Transition animation={animation} duration={duration} visible={visible}>
        {children}
      </Transition>
    );
  };
}

export default StaticAnimation;
