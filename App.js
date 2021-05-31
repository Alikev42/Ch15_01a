/* Kevin R. Salger */
/* IS657, Chapter 15 sample code */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.box}>
    <Text style={styles.boxText}>I'm in a box.</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box:
  {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray"
  },

  boxText:
  {
    color: "darkslategray",
    fontWeight: "bold"
  }
});
