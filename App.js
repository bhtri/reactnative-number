import { ImageBackground, StatusBar, SafeAreaView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

import styles from './App.components.style';
import background from './assets/image/bg.png';
import colors from './contains/colors';
import Item from './components/Item';
import EndGame from './components/EndGame';
import styleItem from './components/Item/style';

const shuffle = (array) => array.sort(() => Math.random() - 0.5);
const bgConstant = [styleItem.bg_one, styleItem.bg_two, styleItem.bg_three, styleItem.bg_four, styleItem.bg_five];
let arrBg = [];
for (let i = 0; i < 10; i++) {
  arrBg = [...arrBg, ...bgConstant];
}

const dataShuffle = () => shuffle(Array.from({ length: 50 }, (_, i) => i + 1));
const bgShuffle = () => shuffle(arrBg);


export default function App() {
  const [items, setItems] = useState(dataShuffle());
  const [bg, setBg] = useState(bgShuffle());

  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground
        source={background}
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.info}>
            <View style={styles.infoScores}>
              <FontAwesome name='money' size={24} color={colors.one} />
              <Text style={styles.infoText}>10</Text>
            </View>
            <View style={styles.infoTime}>
              <FontAwesome name='clock-o' size={24} color={colors.one} />
              <Text style={styles.infoText}>60</Text>
            </View>
          </View>
          <View style={styles.play}>
            {
              items.map((val, index) =>
                <Item
                  key={(index.toString())}
                  value={val}
                  bg={bg[index]}
                />
              )
            }
          </View>
          {/* <EndGame /> */}
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

