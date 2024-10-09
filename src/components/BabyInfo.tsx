import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import VectorImage from 'react-native-vector-image';

const BabyInfo = () => {
  return (
    <View style={styles.babyInfoContainer}>
      <Image
        source={require('../../assets/pictures/baby.png')}
        style={styles.babyImage}
        accessibilityLabel="baby image"
      />
      <View style={styles.babyInfoCard}>
        <View style={styles.babyInfoCardText}>
          <Text style={styles.babyInfoText}>Christian Bowen</Text>
          <Text style={styles.babyInfoSubText}>1y 2m</Text>
        </View>
        <VectorImage
          source={require('../../assets/icons/male.svg')}
          style={styles.smallIcon}
          accessibilityLabel="gender male"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  babyInfoContainer: {
    alignItems: 'center',
    borderRadius: 23,
    overflow: 'hidden',
    height: 223,
  },
  babyInfoCard: {
    position: 'absolute',
    left: 10,
    top: 11,
    backgroundColor: '#F3F7FAB2',
    borderRadius: 23,
    paddingLeft: 20,
    paddingRight: 21,
    paddingTop: 7,
    paddingBottom: 9,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'baseline',
  },
  babyInfoCardText: {},
  babyImage: {
    width: '100%',
    resizeMode: 'cover',
  },
  babyInfoText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: -0.5,
    fontFamily: 'Cabin',
    color: '#363636',
    marginBottom: 3,
  },
  babyInfoSubText: {
    fontSize: 14,
    color: '#363636',
    fontFamily: 'Cabin',
    fontWeight: '400',
    lineHeight: 17,
  },
  smallIcon: {
    width: 12,
    height: 12,
  },
});

export default BabyInfo;
