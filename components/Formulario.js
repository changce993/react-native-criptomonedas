import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';

const Formulario = ({ coin, setCoin, crypto, setCrypto, setConsultQuotation }) => {
  const [ cryptos, setCryptos ] = useState([]); 

  const getCoin = coin => setCoin(coin);
  const getCrypto = crypto => setCrypto(crypto);

  useEffect(() => { 
    const getApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const response = await axios.get(url);
      setCryptos(response.data.Data);
    }
    getApi()
  }, []);
 
  const handleCotizar = () => {
    if(coin.trim() === '' || crypto.trim() === ''){
      showAlert();
      return
    }

    setConsultQuotation(true)
  };

  const showAlert = () => {
    Alert.alert('Error', 'Ambos campos son obligatorio', [{ text: 'OK' }])
  }

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        selectedValue={coin}
        onValueChange={coin => getCoin(coin)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label="Seleccione" value="" /> 
        <Picker.Item label="Dolar Americano" value="USD" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Peso Argentino" value="ARS" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
      </Picker>

      <Text style={styles.label}>CriptoMoneda</Text>
      <Picker
        selectedValue={crypto}
        onValueChange={crypto => getCrypto(crypto)}
        itemStyle={{ height: 120 }}
      >
        <Picker.Item label="Seleccione" value="" />
        {cryptos.map((crypto, index) => (
          <Picker.Item
            key={index}
            label={crypto.CoinInfo.FullName}
            value={crypto.CoinInfo.Name}
          />
        ))}
      </Picker>

      <TouchableHighlight style={styles.button} onPress={handleCotizar}>
        <Text style={styles.buttonText}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Regular',
    fontSize: 16
  },
  button: {
    backgroundColor: '#00C4CC',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 8,
    shadowOffset:{  width: 4,  height: 4,  },
    shadowColor: '#99E7EB',
    shadowOpacity: 1.0,
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})

export default Formulario
