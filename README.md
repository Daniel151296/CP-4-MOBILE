# Aplicativo para Cálculo de Reajuste

## Sobre o projeto

Este projeto é um aplicativo simples, desenvolvido usando **React Native** e **TypeScript**. O objetivo principal é realizar o cálculo de aumento de preço de produtos. O app é dividido em duas partes principais:

- **Tela Inicial:** Usuário insere os dados necessários.
- **Tela de Exibição:** Mostra o resultado do cálculo realizado.

## O que o App faz?

### Formulário para Inserção

- Campo para o nome do item.
- Campo para inserir o preço atual (com validação para números).
- Campo para inserir a taxa de aumento (com validação para números).
- Sistema simples para evitar preenchimentos incorretos.

### Resultado do Cálculo

- Exibe claramente o valor inicial, a taxa aplicada, o valor adicionado e o novo preço.

### Navegação entre as telas

- Após o cálculo, o usuário é automaticamente direcionado para a tela dos resultados.
- Botão disponível para retornar ao formulário e editar as informações já preenchidas.

## Tecnologias utilizadas

- **React Native**
- **React Navigation** (controle das telas)
- **TypeScript** (organização e segurança do código)

## Organização do Código

- **App.tsx:** Responsável por controlar a navegação e os tipos de dados das telas.
- **app/HomeScreen.tsx:** Tela inicial para inserir as informações do produto e efetuar o cálculo.
- **app/PriceScreen.tsx:** Exibe resultados do reajuste.
- **Estilos:** Feitos com StyleSheet, garantindo simplicidade e boa aparência em diferentes dispositivos.

## Principais pontos aprendidos

### Validações

Aprendi sobre como é importante validar entradas do usuário para evitar erros.

### Navegação entre telas

O React Navigation facilitou bastante a troca de dados e a navegação fluida entre as telas do app.

### Simplicidade no layout

A ideia foi manter uma interface limpa e prática, facilitando o uso.

## Como rodar o projeto

Para testar localmente, siga esses passos:

```bash
git clone <url-do-repositorio>
cd pasta-do-projeto
npm install

# Se utilizar iOS, execute também:
cd ios && pod install && cd ..

# Para Android
npx react-native start
npx react-native run-android

# Para iOS
npx react-native run-ios
