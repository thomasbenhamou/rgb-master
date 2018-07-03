import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class RoundButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={
          this.props.plus
            ? () => this.props.onPress(this.props.color, 'plus')
            : () => this.props.onPress(this.props.color)
        }
        style={styles.roundContainer}
      >
        <Icon name={this.props.plus ? 'ios-add' : 'ios-remove'} size={55} color="#2AB858" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  roundContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    width: 65,
    padding: 7,
    backgroundColor: '#070200',
    borderRadius: 50,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#2AB858'
  }
});

export default RoundButton;
