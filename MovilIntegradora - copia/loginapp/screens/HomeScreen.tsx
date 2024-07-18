import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-Dimensions.get('window').width)).current;

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(slideAnim, {
        toValue: -Dimensions.get('window').width,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleMenuItemPress = (screen) => {
    setMenuVisible(false);
    navigation.navigate(screen);
  };

  const closeMenu = () => {
    if (menuVisible) {
      toggleMenu();
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
        <View style={styles.header}>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
            <Image source={require('../assets/images/menu-icon.png')} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <Text style={styles.title}>NIVEL DE AGUA</Text>
          <View style={styles.tank}>
            <Text style={styles.tankText}>TINACO 1</Text>
            <Text style={styles.levelText}>80%</Text>
            <Text style={styles.levelTextDesc}>DE NIVEL DE AGUA</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SOLICITAR LLENADO DE TINACO</Text>
        </TouchableOpacity>
      </ImageBackground>

      {menuVisible && (
        <TouchableWithoutFeedback onPress={closeMenu}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <Animated.View style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}>
                <View style={styles.menuHeader}>
                  <Image source={require('../assets/images/profile.jpg')} style={styles.profileImage} />
                  <Text style={styles.profileName}>HECTOR NAVARRO</Text>
                </View>
                <TouchableOpacity onPress={() => handleMenuItemPress('Home')}>
                  <Text style={styles.menuItem}>NIVEL DE AGUA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuItemPress('Notifications')}>
                  <Text style={styles.menuItem}>NOTIFICACIONES</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuItemPress('Consumption')}>
                  <Text style={styles.menuItem}>CONSUMO</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuItemPress('Support')}>
                  <Text style={styles.menuItem}>SOPORTE</Text>
                </TouchableOpacity>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 2,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    marginTop: 50,
  },
  tank: {
    alignItems: 'center',
  },
  tankText: {
    fontSize: 18,
    color: '#fff',
  },
  levelText: {
    fontSize: 48,
    color: '#fff',
  },
  levelTextDesc: {
    fontSize: 18,
    color: '#fff',
  },
  button: {
    backgroundColor: '#555',
    padding: 15,
    borderRadius: 5,
    marginBottom: 30,
    alignSelf: 'center',
    width: '80%',
    position: 'absolute',
    bottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  menuContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '80%',
    backgroundColor: '#1C3D73',
    padding: 20,
    justifyContent: 'flex-start',
    zIndex: 2,
  },
  menuHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    marginTop: 10,
    color: '#fff',
    fontSize: 18,
  },
  menuItem: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
  },
});
