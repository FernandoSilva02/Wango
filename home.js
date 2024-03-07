import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from '../styles'; // Importa los estilos desde el archivo styles.js

/*const HeaderIcon = ({ imageUrl }) => (
  <Image source={imageUrl} style={styles.headerIcon} />
);*/

const FeatureButton = ({ imageUrl, label, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.featureButtonContainer}>
    <Image source={imageUrl} style={styles.featureImage} />
    <Text style={styles.featureLabel}>{label}</Text>
  </TouchableOpacity>
);

const DashboardScreen = ({ menuOpen }) => {
  const onFeaturePress = (label) => {
    Alert.alert("Action", `You tapped on ${label}`);
  };

  /*const headerIcons = [
    { id: 1, imageUrl: require('../assets/hamburguer_menu.png') },
    { id: 2, imageUrl: require('../assets/wango_tiny.png') },
  ];*/

  const features = [
    { id: 1, imageUrl: require('../assets/mis_lotes.png'), label: "Mis lotes" },
    { id: 2, imageUrl: require('../assets/mi_perfil.png'), label: "Mi perfil" },
    { id: 3, imageUrl: require('../assets/agregar_trabajador.png'), label: "Crear un usuario\ntrabajador" },
    { id: 4, imageUrl: require('../assets/ver_mis_trabajadores.png'), label: "Ver mis\ntrabajadores" },
    { id: 5, imageUrl: require('../assets/cerrar_sesion.png'), label: "Cerrar sesión" },
  ];

  // Dividir las características en grupos de dos elementos por fila
  const featureRows = [];
  for (let i = 0; i < features.length; i += 2) {
    const row = features.slice(i, i + 2);
    featureRows.push(row);
  }

  return (
    <View style={[styles.container, menuOpen ? styles.menuOpen : null]}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>¡Bienvenido Carlos Mario!</Text>
          <View style={styles.featuresContainer}>
            {featureRows.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.featureRow}>
                {row.map(feature => (
                  <FeatureButton key={feature.id} imageUrl={feature.imageUrl} label={feature.label} onPress={() => onFeaturePress(feature.label)} />
                ))}
                {row.length === 1 && <View style={{ flex: 1 }} />}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;
