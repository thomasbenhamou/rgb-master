import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Animated, View } from 'react-native';

class AnimatedArrow extends Component {
  state = {
    translateAnim: new Animated.Value(0)
  };

  componentDidMount = () => {
    this.runAnimation();
  };

  resetAnimation = () => {
    this.setState(
      {
        translateAnim: new Animated.Value(0)
      },
      () => this.runAnimation()
    );
  };
  runAnimation = () => {
    Animated.timing(this.state.translateAnim, {
      toValue: this.props.left ? 20 : -20,
      duration: 700,
      useNativeDriver: true
    }).start(() => this.resetAnimation());
  };
  render() {
    return (
      <Animated.View
        style={{
          transform: [
            {
              translateX: this.props.left ? this.state.translateAnim : this.state.translateAnim
            }
          ]
        }}
      >
        <Icon
          name={this.props.left ? 'ios-arrow-forward' : 'ios-arrow-back'}
          size={32}
          color={this.props.green ? 'green' : 'white'}
        />
      </Animated.View>
    );
  }
}

export default AnimatedArrow;
