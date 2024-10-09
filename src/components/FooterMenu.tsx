import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import VectorImage from 'react-native-vector-image';

const FooterMenu = () => {
  return (
    <View style={styles.footerMenu}>
      <TouchableOpacity style={styles.menuItem}>
        <VectorImage
          source={require('../../assets/icons/home.svg')}
          style={styles.defaultIcon}
          accessibilityLabel="home"
        />
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuMainItem}>
        <View style={styles.mainIconContainer}>
          <VectorImage
            source={require('../../assets/icons/mainButton.svg')}
            style={styles.mainIcon}
            accessibilityLabel="main menu"
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <VectorImage
          source={require('../../assets/icons/more.svg')}
          style={styles.defaultIcon}
          accessibilityLabel="see more"
        />
        <Text style={styles.menuText}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 69,
    backgroundColor: '#FEF9F5',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuMainItem: {
    alignItems: 'center',
    position: 'absolute',
    top: -49.5,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  mainIconContainer: {
    backgroundColor: '#FEF9F5',
    borderRadius: 50,
    padding: 7,
  },
  mainIcon: {
    width: 92,
    height: 92,
  },
  defaultIcon: {
    width: 32,
    height: 32,
  },
  menuText: {
    fontSize: 12,
  },
});

export default FooterMenu;
