// styles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
    backgroundColor: 'white',
  },
  scrollViewContainer: {
    paddingBottom: 48,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '100%',
  },
  headerIcon: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
  },
  welcomeContainer: {
    paddingHorizontal: 40,
    marginTop: 56,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
  },
  featuresContainer: {
    marginTop: 36,
    width: '100%',
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  featureButtonContainer: {
    alignItems: 'center',
    flex: 1,
  },
  featureImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  featureLabel: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default styles;
