import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import VectorImage from 'react-native-vector-image';

function App(): React.JSX.Element {
  // TODO: Fetch user details from the backend API (e.g., user profile, baby information)
  // Example: useEffect(() => { fetchUserData() }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={{
            position: 'absolute',
            top: -45,
            left: 0,
            opacity: 0.3,
          }}
          source={require('./assets/design1.png')}
        />
        <View style={styles.header}>
          <Text style={styles.logo}>Woddle</Text>
          <View style={styles.headerButtons}>
            <VectorImage
              source={require('./assets/icons/inbox.svg')}
              style={styles.inboxIcon}
            />
            <TouchableOpacity>
              {/* TODO: Replace with user profile image from backend */}
              <Image
                source={require('./assets/pictures/profilePic.png')}
                style={styles.profileIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.mainContainer}>
          <View style={styles.babyInfoContainer}>
            <Image
              source={require('./assets/pictures/baby.png')}
              style={styles.babyImage}
            />
            <View style={styles.babyInfoCard}>
              <View style={styles.babyInfoCardText}>
                <Text style={styles.babyInfoText}>Christian Bowen</Text>
                <Text style={styles.babyInfoSubText}>1y 2m</Text>
              </View>
              <VectorImage
                source={require('./assets/icons/male.svg')}
                style={styles.smallIcon}
              />
            </View>
          </View>
          <View style={styles.cardsContainer}>
            <View style={{...styles.card, ...styles.card1}}>
              <Text style={styles.cardTitle}>Weight</Text>
              <Text style={styles.cardData}>
                15<Text style={styles.cardDataSpan}> lbs</Text>
                {'\n'}3<Text style={styles.cardDataSpan}> oz</Text>
              </Text>
              <Text style={styles.cardTime}>1:00 PM Dec 05 2023</Text>
            </View>

            <View style={{...styles.card, ...styles.card2}}>
              <Text style={styles.cardTitle}>Diaper</Text>
              <Text style={styles.cardData}>Pee Medium</Text>
              <Text style={styles.cardTime}>2h 55m ago</Text>
            </View>

            <View style={{...styles.card, ...styles.card3}}>
              <Text style={styles.cardTitle}>Feeding</Text>
              <Text style={styles.cardData}>
                Formula 5<Text style={styles.cardDataSpan}>oz</Text>
              </Text>
              <Text style={styles.cardTime}>2h 30m ago</Text>
            </View>

            <View style={{...styles.card, ...styles.card4}}>
              <Text style={styles.cardTitle}>Sleep</Text>
              <Text style={styles.cardData}>
                2<Text style={styles.cardDataSpan}>h</Text> 20
                <Text style={styles.cardDataSpan}>m</Text>
              </Text>
              <Text style={styles.cardTime}>3h 35m ago</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.adContainer}>
            {/* TODO: Replace with backend API fetched ad */}
            <Image
              source={require('./assets/pictures/add.png')}
              style={styles.adImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.milestoneContainer}>
            <Image
              source={require('./assets/pictures/milestone.png')}
              style={styles.milestoneImage}
            />
            <View style={styles.milestoneCardContainer}>
              <View style={styles.milestoneTextContainer}>
                <Text style={styles.milestoneTitle}>Milestones</Text>
                <Text style={styles.milestoneData}>Month 12</Text>
              </View>
              <View style={styles.milestoneIconContainer}>
                <VectorImage
                  source={require('./assets/icons/arrowCircleLeft.svg')}
                  style={styles.defaultIcon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footerMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <VectorImage
            source={require('./assets/icons/home.svg')}
            style={styles.defaultIcon}
          />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuMainItem}>
          <View style={styles.mainIconContainer}>
            <VectorImage
              source={require('./assets/icons/mainButton.svg')}
              style={styles.mainIcon}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <VectorImage
            source={require('./assets/icons/more.svg')}
            style={styles.defaultIcon}
          />
          <Text style={styles.menuText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  defaultIcon: {
    width: 32,
    height: 32,
  },
  mainIcon: {
    width: 92,
    height: 92,
  },
  smallIcon: {
    width: 12,
    height: 12,
  },
  inboxIcon: {
    width: 30,
    height: 26,
  },
  mainContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 19,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
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
  notificationIcon: {
    marginRight: 10,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
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
    height: '100%',
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
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 19,
  },
  card: {
    flexGrow: 1,
    flexBasis: 157,
    flexShrink: 1,
    height: 173,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 15,
    gap: 15,
    // justifyContent: 'space-between',
  },
  card1: {
    backgroundColor: '#FFF5DC',
  },
  card2: {
    backgroundColor: '#EFF1FF',
  },
  card3: {
    backgroundColor: '#FFEEE7',
  },
  card4: {
    backgroundColor: '#F8EEFF',
  },
  cardTitle: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '400',
    color: '#000000',
    fontFamily: 'Roboto-Regular',
  },
  cardData: {
    fontSize: 32,
    lineHeight: 37.5,
    color: '#000000',
    fontWeight: '300',
    fontFamily: 'Roboto-Light',
    textAlign: 'left',
  },
  cardDataSpan: {
    fontSize: 24,
  },
  cardTime: {
    fontSize: 10,
    fontWeight: '400',
    color: '#878585',
    marginTop: 'auto',
    fontFamily: 'Roboto-Light',
  },
  adContainer: {},
  adImage: {
    width: '100%',
    height: 73,
    borderRadius: 15,
  },
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
    // left: '50%',
    // transform: [{translateX: -49.5}],
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
  menuText: {
    fontSize: 12,
  },
});

export default App;

// Backend Integration Notes:
// 1. Fetch user data and baby profile picture from backend: Implement the logic in the useEffect hook.
// 2. Fetch advertisement data dynamically using a backend API.
// 3. Fetch milestone information from backend using an API endpoint to show real user data.
