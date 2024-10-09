import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

const Add = () => {
  return (
    <TouchableOpacity style={styles.adContainer}>
      {/* TODO: Replace with backend API fetched ad */}
      <Image
        source={require('../../assets/pictures/add.png')}
        style={styles.adImage}
        accessibilityLabel="ad image"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  adContainer: {},
  adImage: {
    width: '100%',
    height: 73,
    borderRadius: 15,
    resizeMode: 'cover',
  },
});

export default Add;
