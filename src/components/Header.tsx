import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import VectorImage from 'react-native-vector-image';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Woddle</Text>
      <View style={styles.headerButtons}>
        <VectorImage
          source={require('../../assets/icons/inbox.svg')}
          style={styles.inboxIcon}
          accessibilityLabel="inbox"
        />
        <TouchableOpacity>
          {/* TODO: Replace with user profile image from backend */}
          <Image
            source={require('../../assets/pictures/profilePic.png')}
            style={styles.profileIcon}
            accessibilityLabel="profile picture"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  logo: {
    fontSize: 40,
    letterSpacing: -0.5,
    fontFamily: 'Ribeye-Regular',
    color: '#000',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  inboxIcon: {
    width: 30,
    height: 26,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});

export default Header;
