import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Animated } from 'react-native';
import AnimatedArrow from '../AnimatedArrow/AnimatedArrow';

class startButton extends Component {
  state = {
    scale: new Animated.Value(1)
  };

  startAnimation = () => {
    Animated.timing(this.state.scale, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: false
    }).start(this.props.onPress);
  };

  render() {
    return (
      <Animated.View
        style={{
          opacity: this.state.scale,
          transform: [
            {
              scale: this.state.scale.interpolate({
                inputRange: [0, 1],
                outputRange: [12, 1]
              })
            }
          ],
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity style={styles.startButton} onPress={this.startAnimation}>
          <View style={styles.container}>
            <AnimatedArrow left />
            <Animated.Text
              style={[
                styles.buttonText,
                {
                  color: this.state.scale.interpolate({
                    inputRange: [0, 0.2, 0.4, 0.6, 0.8, 0.99, 1],
                    outputRange: ['blue', 'green', 'red', 'blue', 'green', 'red', 'white']
                  })
                }
              ]}
            >
              start
            </Animated.Text>
            <AnimatedArrow />
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  startButton: {
    width: '100%',
    height: 45,
    flexDirection: 'column',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#070200',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '50%',
    height: '100%'
  },
  buttonText: {
    color: '#eeeeee',
    fontSize: 32,
    fontFamily: 'Orbitron'
  }
});
export default startButton;
