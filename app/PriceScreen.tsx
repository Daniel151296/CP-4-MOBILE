// PriceScreen.tsx
// Essa tela exibe os resultados do cálculo do novo preço.
// Aqui o usuário pode ver o valor original, a taxa aplicada, o valor do acréscimo e o preço final.
// Também tem um botão para voltar e editar os dados.

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../App';

type Props = NativeStackScreenProps<AppStackParamList, 'PriceScreen'>;

const PriceScreen: React.FC<Props> = ({ navigation, route }) => {
  const { prodName, initPrice, newPrice, rate } = route.params;
  const increaseValue = newPrice - initPrice;

  // Função para voltar e editar os dados
  const editData = () => {
    navigation.navigate('HomeScreen', {
      prodName,
      initPrice,
      rate,
    });
  };

  // Formata o número para o formato de moeda local
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFECB3" />
      <Text style={styles.header}>Resultado do Cálculo</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Produto:</Text>
        <Text style={styles.value}>{prodName}</Text>

        <Text style={styles.label}>Valor Inicial:</Text>
        <Text style={styles.value}>{formatCurrency(initPrice)}</Text>

        <Text style={styles.label}>Taxa Aplicada:</Text>
        <Text style={styles.value}>{rate}%</Text>

        <Text style={styles.label}>Acréscimo:</Text>
        <Text style={styles.value}>{formatCurrency(increaseValue)}</Text>

        <Text style={styles.label}>Novo Preço:</Text>
        <Text style={styles.value}>{formatCurrency(newPrice)}</Text>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={editData}>
        <Text style={styles.editButtonText}>Editar Dados</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PriceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    marginBottom: 25,
    textAlign: 'center',
    color: '#BF360C',
    fontFamily: 'Arial',
  },
  card: {
    backgroundColor: '#FFECB3',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BF360C',
  },
  label: {
    fontSize: 16,
    color: '#BF360C',
    fontFamily: 'Verdana',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3E2723',
    fontFamily: 'Arial',
  },
  editButton: {
    backgroundColor: '#BF360C',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 30,
  },
  editButtonText: {
    color: '#FFECB3',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Arial',
  },
});
