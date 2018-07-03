import React from 'react';
import { Text } from 'react-native';

const score = ({ score }) => (
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
    Score: {score}
  </Text>
);

export default score;
