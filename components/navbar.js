import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Navbar = ({ isOpen, toggleMenu }) => {
  return (
    <View style={[styles.container, isOpen ? styles.open : styles.closed]}>
      <TouchableOpacity onPress={toggleMenu} style={styles.toggleButton}>
        <Text style={styles.toggleText}>☰</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Menu item 1")} style={styles.menuItem}>
        <Text style={styles.menuText}>Menu Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Menu item 2")} style={styles.menuItem}>
        <Text style={styles.menuText}>Menu Item 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Menu item 3")} style={styles.menuItem}>
        <Text style={styles.menuText}>Menu Item 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 25, // Ajusta según la altura deseada desde la parte superior
    left: 0,
    zIndex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: 0,
    overflow: 'hidden',
    paddingTop: 50, // Ajusta según la altura del Navbar
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    transitionProperty: 'height',
    transitionDuration: '0.5s',
  },
  open: {
    height: 200, // Altura del Navbar cuando está abierto
  },
  closed: {
    height: 0,
  },
  toggleButton: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
  toggleText: {
    fontSize: 24,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuText: {
    fontSize: 18,
  },
});

export default Navbar;
