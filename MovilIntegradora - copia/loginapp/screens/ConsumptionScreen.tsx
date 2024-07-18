import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';

export default function ConsumptionScreen() {
  return (
    <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Consumo</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartPlaceholderText}>Gráfica de Consumo 1</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  chartPlaceholder: {
    backgroundColor: '#1C3D73',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200, // Altura de la caja de la gráfica
  },
  chartPlaceholderText: {
    color: '#fff',
    fontSize: 16,
  },
});
