import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

class AnimatedTitle extends Component {
  state = {
    color: new Animated.Value(0)
  };

  componentDidMount = () => {
    this.startAnimation();
  };

  startAnimation = () => {
    Animated.timing(this.state.color, {
      toValue: 1,
      duration: 1000
    }).start(() => this.resetAnimation());
  };

  resetAnimation = () => {
    this.setState(
      {
        color: new Animated.Value(0)
      },
      () => this.startAnimation()
    );
  };
  render() {
    return (
      <View>
        <Animated.Text
          style={{
            fontSize: 30,
            fontFamily: 'Orbitron',
            color: this.state.color.interpolate({
              inputRange: [0, 0.35, 0.7, 1],
              outputRange: ['red', 'green', 'blue', 'black']
            })
          }}
        >
          You won !!!
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default AnimatedTitle;
