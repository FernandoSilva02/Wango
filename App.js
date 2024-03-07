import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DashboardScreen from './components/home';
import Navbar from './components/navbar';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.container}>
      <DashboardScreen menuOpen={menuOpen} />
      <Navbar isOpen={menuOpen} toggleMenu={toggleMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
