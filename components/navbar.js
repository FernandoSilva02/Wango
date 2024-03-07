import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const MenuHamburguesa = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>☰</Text>
      </TouchableOpacity>
      {menuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuItem}>
            <Text style={styles.menuItemText}>Opción 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuItem}>
            <Text style={styles.menuItemText}>Opción 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu} style={styles.menuItem}>
            <Text style={styles.menuItemText}>Opción 3</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  menuButtonText: {
    fontSize: 24,
  },
  menu: {
    position: 'absolute',
    top: 80,
    left: 20,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default MenuHamburguesa;
