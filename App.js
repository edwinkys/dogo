/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Card from './src/Card';
import IconButton from './src/IconButton';
import dogs from './data/dogs';

const App = () => {
  // Initializing the swipe library
  const useSwiper = useRef(null).current;

  // Create swipe handler for the button
  const onSwipedLeft = () => useSwiper.swipeLeft();
  const onSwipedTop = () => useSwiper.swipeTop();
  const onSwipedRight = () => useSwiper.swipeRight();

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.title}>Dogo Match</Text>
      </View>
      <View style={styles.swiper}>
        <Swiper
          ref={useSwiper}
          animateCardOpacity
          cards={dogs}
          containerStyle={styles.container}
          renderCard={(cards) => <Card card={cards} />}
          cardIndex={0}
          backgroundColor="white"
          stackSize={2}
          infinite
          showSecondCard
          animateOverlayLabelsOpacity
        />
      </View>
      <View style={styles.buttons}>
        <IconButton
          add="close"
          onPress={onSwipedLeft}
          color="white"
          backgroundColor="#ccc"
        />
        <IconButton
          add="star"
          onPress={onSwipedTop}
          color="white"
          backgroundColor="#fffcbb"
        />
        <IconButton
          add="favorite"
          onPress={onSwipedRight}
          color="white"
          backgroundColor="#ff5757"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    letterSpacing: 2,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Avenir',
  },
  swiper: {
    flex: 1,
  },
  buttons: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    display: 'flex',
    paddingHorizontal: 75,
    bottom: 120,
  },
});

export default App;
