import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [numberToGuess, setNumberToGuess] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const guessedNumber = parseInt(guess, 10);
    if (isNaN(guessedNumber)) {
      Alert.alert('Invalid input', 'Skriv ett gilltig nummer');
      return;
    }

    if (guessedNumber < numberToGuess) {
      setMessage('för lågt!');
    } else if (guessedNumber > numberToGuess) {
      setMessage('för högt!');
    } else {
      setMessage('Rätt gissat bravo!');
      setNumberToGuess(generateRandomNumber());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guessing Game</Text>
      <p style={styles.p}> Det här är ett gissningspel du måste gissa på en siffra mellan 1 till 100</p>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='skriv en siffra mellan 1 till 100 få se om du gissar rätt!'
        value={guess}
        onChangeText={setGuess}
      />
      <Button title='Sicka gissningen' onPress={handleGuess} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  p:{
    fontSize: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    width: '80%',
    paddingHorizontal: 8,
  },
  message: {
    marginTop: 16,
    fontSize: 18,
  },
});
