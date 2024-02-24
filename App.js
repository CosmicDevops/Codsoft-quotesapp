import React, { useState } from 'react';
import { View, Text, StyleSheet, Share, TouchableOpacity, SafeAreaView } from 'react-native';
import quotes from './quotes'; 

const App = () => {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const shareQuote = async () => {
    try {
      await Share.share({
        message: quote,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const getRandomQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Inspiring Quotes </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.quote}>{quote}</Text>
        <TouchableOpacity style={styles.button} onPress={shareQuote}>
          <Text style={styles.buttonText}>Share Quote</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={getRandomQuote}>
          <Text style={styles.buttonText}>Get Random Quote</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    backgroundColor: '#007BFF', 
    padding: 20,
    paddingTop: 40, 
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  quote: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF', 
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 16,
  },
});

export default App;
