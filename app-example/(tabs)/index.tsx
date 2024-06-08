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
      Alert.alert('Invalid input', 'Please enter a valid number');
      return;
    }

    if (guessedNumber < numberToGuess) {
      setMessage('Too low!');
    } else if (guessedNumber > numberToGuess) {
      setMessage('Too high!');
    } else {
      setMessage('Correct!');
      setNumberToGuess(generateRandomNumber());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guessing Game</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Enter your guess'
        value={guess}
        onChangeText={setGuess}
      />
      <Button title='Submit Guess' onPress={handleGuess} />
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
