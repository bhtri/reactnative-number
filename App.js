import { ImageBackground, StatusBar, SafeAreaView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

import { Time, Item, EndGame, styleItem } from './components';
import { DEFINE, COLORS, IMAGE } from './contains';
import styles from './App.components.style';

const shuffle = (array) => array.sort(() => Math.random() - 0.5);
const bgConstant = [styleItem.bg_one, styleItem.bg_two, styleItem.bg_three, styleItem.bg_four, styleItem.bg_five];
let arrBg = [];
for (let i = 0; i < 10; i++) {
  arrBg = [...arrBg, ...bgConstant];
}

const dataShuffle = () => shuffle(Array.from({ length: 50 }, (_, i) => i + 1));
const bgShuffle = () => shuffle(arrBg);

const dataInit = dataShuffle();
const bgInit = bgShuffle();

export default function App() {
  const [startGame, setStartGame] = useState(false);
  const [items, setItems] = useState(dataInit);
  const [bg, setBg] = useState(bgInit);
  const [numberNext, setNumberNext] = useState(DEFINE.NUMBER_START);
  const [endGame, setEndGame] = useState(false);
  const [timeOut, setTimeOut] = useState(DEFINE.TIME_DEFAULT);
  const [hightScore, setHightScore] = useState(0);
  const score = numberNext - 1;

  const onChoice = (value) => {
    if (value === DEFINE.NUMBER_START) {
      setStartGame(true);
    }
    if (value === numberNext) {
      if (value > hightScore) {
        setHightScore(value);
      }
      setNumberNext(value + 1);
    } else {
      setStartGame(false);
      setEndGame(true);
    }
  }

  const onClose = () => {
    setNumberNext(DEFINE.NUMBER_START);
    setEndGame(false);
    setStartGame(false);
    setItems(dataShuffle());
    setBg(bgShuffle());
  }

  const onResponse = (isTimeOut) => {
    if (isTimeOut) {
      if (score > hightScore) {
        setHightScore(score);
      }
      setEndGame(true);
    }
  }

  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        source={IMAGE.background}
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.info}>
            <View style={styles.infoScores}>
              <FontAwesome name='money' size={24} color={COLORS.one} />
              <Text style={styles.infoText}>{hightScore}</Text>
            </View>
            <View style={styles.infoTime}>
              <FontAwesome name='clock-o' size={24} color={COLORS.one} />
              <Text style={styles.infoText}>
                <Time onResponse={onResponse} startGame={startGame} timeOut={timeOut} />
              </Text>
            </View>
          </View>
          <View style={styles.play}>
            {
              items.map((val, index) =>
                <Item
                  key={(index.toString())}
                  value={val}
                  bg={bg[index]}
                  onChoice={onChoice}
                  score={score}
                />
              )
            }
          </View>
          <EndGame
            isVisible={endGame}
            onClose={onClose}
            score={score}
          />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

