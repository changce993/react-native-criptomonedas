import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, SafeAreaView, View } from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Quotation from './components/Quotation';
import axios from 'axios';

const App = () => {
  const [ coin, setCoin ] = useState('');
  const [ crypto, setCrypto ] = useState('');
  const [ consultQuotation, setConsultQuotation ] = useState(false);
  const [ quotation, setQuotation ] = useState({});

  useEffect(() => {
    (async () => {
      if(consultQuotation){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
        const response = await axios.get(url);
        setQuotation(response.data.DISPLAY[crypto][coin]);
        setConsultQuotation(false);
      }
    })()
  }, [consultQuotation]); 

  return (
    <>
      <SafeAreaView/>
      <Header/>
      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.content}>
        <Formulario
          coin={coin}
          setCoin={setCoin}
          crypto={crypto}
          setCrypto={setCrypto}
          setConsultQuotation={setConsultQuotation}
        />
        
        <Quotation quotation={quotation}/>
      </View>
      <SafeAreaView/>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 190
  },
  content: {
    marginHorizontal: '5%',
    width: '90%',
    height: 200
  }
})

export default App;
