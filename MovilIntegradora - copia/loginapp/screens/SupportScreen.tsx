import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

export default function SupportScreen() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [showRecommendationForm, setShowRecommendationForm] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleSendFeedback = () => {
    console.log('Feedback sent:', inputText);
    setShowFeedbackForm(false);
    setInputText('');
  };

  const handleSendRecommendation = () => {
    console.log('Recommendation sent:', inputText);
    setShowRecommendationForm(false);
    setInputText('');
  };

  return (
    <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>SOPORTE</Text>
        </View>
        {!showFeedbackForm && !showRecommendationForm && (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setShowFeedbackForm(true)}>
              <Text style={styles.buttonText}>ENVIAR COMENTARIOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setShowRecommendationForm(true)}>
              <Text style={styles.buttonText}>RECOMENDACIONES</Text>
            </TouchableOpacity>
          </View>
        )}
        {showFeedbackForm && (
          <View style={styles.formContainer}>
            <Text style={styles.label}>Ingrese sus comentarios:</Text>
            <TextInput
              style={styles.input}
              multiline
              numberOfLines={4}
              onChangeText={setInputText}
              value={inputText}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSendFeedback}>
              <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setShowFeedbackForm(false)}>
              <Text style={styles.sendButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        )}
        {showRecommendationForm && (
          <View style={styles.formContainer}>
            <Text style={styles.label}>Ingrese sus recomendaciones:</Text>
            <TextInput
              style={styles.input}
              multiline
              numberOfLines={4}
              onChangeText={setInputText}
              value={inputText}
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSendRecommendation}>
              <Text style={styles.sendButtonText}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setShowRecommendationForm(false)}>
              <Text style={styles.sendButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#555',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
});
