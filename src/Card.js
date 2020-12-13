import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import {shape, string, number} from 'prop-types';

const Card = ({card}) => (
  <View activeOpacity={1} style={styles.card}>
    <Image style={styles.image} source={card.photo} resizeMode="cover" />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>{`${card.name}, ${card.age}`}</Text>
    </View>
  </View>
);

Card.propTypes = {
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    age: number,
  }).isRequired,
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    height: height - 450,
    backgroundColor: '#fff',
    borderRadius: 30,
    shadowColor: '#00000025',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15,
  },
  image: {
    borderRadius: 30,
    flex: 1,
    width: '100%',
  },
  photoDescriptionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    left: 30,
    bottom: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Avenir',
    fontWeight: '700',
    letterSpacing: 2,
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
});

export default Card;
