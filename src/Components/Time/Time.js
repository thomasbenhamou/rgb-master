import React from 'react';
import { View, Text } from 'react-native';

const time = ({ time }) => (
  <Text
    style={{
      fontSize: 18,
      color: '#eee',
      backgroundColor: '#070200',
      padding: 2,
      margin: 0,
      fontFamily: 'Orbitron'
    }}
  >
    Time: {time}
  </Text>
);

export default time;
