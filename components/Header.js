import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <Text style={styles.header}>Criptomonedas</Text>
  )
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    paddingVertical: 12,
    fontFamily: 'Lato-Black'
  }
});

export default Header
