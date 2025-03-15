// HomeScreen.tsx
// Essa é a tela onde o usuário vai informar os dados do produto.
// Tudo é bem simples, com campos de texto e um botão para calcular o novo preço.

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../App';

type Props = NativeStackScreenProps<AppStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  // Guardando os valores digitados, se vierem da tela anterior
  const [prodName, setProdName] = useState(route.params?.prodName ?? '');
  const [initPrice, setInitPrice] = useState(route.params?.initPrice ? String(route.params.initPrice) : '');
  const [rate, setRate] = useState(route.params?.rate ? String(route.params.rate) : '');

  // Função que verifica os dados e faz o cálculo
  const calculatePrice = () => {
    if (!prodName.trim()) {
      Alert.alert('Atenção', 'Informe o nome do produto!');
      return;
    }
    if (!initPrice || isNaN(Number(initPrice))) {
      Alert.alert('Erro', 'O valor do produto deve ser um número!');
      return;
    }
    if (!rate || isNaN(Number(rate))) {
      Alert.alert('Erro', 'A taxa de aumento deve ser numérica!');
      return;
    }

    const priceNum = Number(initPrice);
    const rateNum = Number(rate);
    const increase = (priceNum * rateNum) / 100;
    const newPrice = priceNum + increase;

    // Navega para a tela de resultados, passando os dados
    navigation.navigate('PriceScreen', {
      prodName,
      initPrice: priceNum,
      newPrice,
      rate: rateNum,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#B2EBF2" />
      <Text style={styles.title}>Cálculo de Preço</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        placeholderTextColor="#555"
        value={prodName}
        onChangeText={setProdName}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor inicial (ex: 100)"
        placeholderTextColor="#555"
        keyboardType="numeric"
        value={initPrice}
        onChangeText={setInitPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa de aumento (%)"
        placeholderTextColor="#555"
        keyboardType="numeric"
        value={rate}
        onChangeText={setRate}
      />
      <TouchableOpacity style={styles.button} onPress={calculatePrice}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2EBF2',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
    color: '#006064',
    fontFamily: 'Arial',
  },
  input: {
    height: 50,
    borderColor: '#006064',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#E0F7FA',
    color: '#004D40',
    fontFamily: 'Verdana',
  },
  button: {
    backgroundColor: '#006064',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#E0F7FA',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Arial',
  },
});
