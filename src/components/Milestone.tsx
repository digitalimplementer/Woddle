import React from 'react';
import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native';
import VectorImage from 'react-native-vector-image';

const Milestone = () => {
  return (
    <TouchableOpacity style={styles.milestoneContainer}>
      <Image
        source={require('../../assets/pictures/milestone.png')}
        style={styles.milestoneImage}
        accessibilityLabel="milestone image"
      />
      <View style={styles.milestoneCardContainer}>
        <View style={styles.milestoneTextContainer}>
          <Text style={styles.milestoneTitle}>Milestones</Text>
          <Text style={styles.milestoneData}>Month 12</Text>
        </View>
        <View style={styles.milestoneIconContainer}>
          <VectorImage
            source={require('../../assets/icons/arrowCircleLeft.svg')}
            style={styles.defaultIcon}
            accessibilityLabel="open more milestones"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  milestoneContainer: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  milestoneImage: {
    width: '100%',
    height: 148,
  },
  milestoneCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingLeft: 24,
    paddingRight: 23,
    paddingTop: 15,
    paddingBottom: 21,
  },
  milestoneTextContainer: {
    gap: 11,
  },
  milestoneTitle: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Roboto-Regular',
  },
  milestoneData: {
    fontSize: 32,
    fontWeight: '300',
    lineHeight: 37.5,
    color: '#000000',
    fontFamily: 'Roboto-Light',
  },
  milestoneIconContainer: {
    justifyContent: 'flex-end',
  },
  defaultIcon: {
    width: 32,
    height: 32,
  },
});

export default Milestone;
