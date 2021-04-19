import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Quotation = ({ quotation }) => {

  if(Object.keys(quotation).length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Precio: {quotation.PRICE}</Text> 
      <Text style={styles.text}>Más alto del dia: {quotation.HIGHDAY}</Text> 
      <Text style={styles.text}>Más bajo del dia: {quotation.LOWDAY}</Text> 
      <Text style={styles.text}>Vaciacion últimas 24 horas: {quotation.CHANGEPCT24HOUR}%</Text> 
      <Text style={styles.text}>Última actualización: {quotation.LASTUPDATE}</Text> 
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8
  },
  text: {

  }
})

export default Quotation
