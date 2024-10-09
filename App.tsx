import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Image, View} from 'react-native';

import BabyInfo from './src/components/BabyInfo';
import Card from './src/components/Card';
import Add from './src/components/Add';
import Milestone from './src/components/Milestone';
import FooterMenu from './src/components/FooterMenu';
import Header from './src/components/Header';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.mainContainer}>
          <BabyInfo />
          <Card />
          <Add />
          <Milestone />
        </View>
      </ScrollView>
      <FooterMenu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainContainer: {
    paddingHorizontal: 20,
    gap: 19,
    paddingBottom: 50,
  },
});

export default App;
