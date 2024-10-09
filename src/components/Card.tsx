import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = () => {
  return (
    <View style={styles.cardsContainer}>
      <View style={{...styles.card, ...styles.card1}}>
        <Text style={styles.cardTitle}>Weight</Text>
        <Text style={styles.cardData} numberOfLines={2}>
          15<Text style={styles.cardDataSpan}> lbs</Text>
          {'\n'}3<Text style={styles.cardDataSpan}> oz</Text>
        </Text>
        <Text style={styles.cardTime}>1:00 PM Dec 05 2023</Text>
      </View>

      <View style={{...styles.card, ...styles.card2}}>
        <Text style={styles.cardTitle}>Diaper</Text>
        <Text style={styles.cardData} numberOfLines={2}>
          Pee Medium
        </Text>
        <Text style={styles.cardTime}>2h 55m ago</Text>
      </View>

      <View style={{...styles.card, ...styles.card3}}>
        <Text style={styles.cardTitle}>Feeding</Text>
        <Text style={styles.cardData} numberOfLines={2}>
          Formula 5<Text style={styles.cardDataSpan}>oz</Text>
        </Text>
        <Text style={styles.cardTime}>2h 30m ago</Text>
      </View>

      <View style={{...styles.card, ...styles.card4}}>
        <Text style={styles.cardTitle}>Sleep</Text>
        <Text style={styles.cardData} numberOfLines={2}>
          2<Text style={styles.cardDataSpan}>h</Text> 20
          <Text style={styles.cardDataSpan}>m</Text>
        </Text>
        <Text style={styles.cardTime}>3h 35m ago</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Card;
