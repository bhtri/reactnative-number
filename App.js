import { ImageBackground, StatusBar, SafeAreaView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

import styles from './App.components.style';
import background from './assets/image/bg.png';
import colors from './contains/colors';
import Item from './components/Item';
import EndGame from './components/EndGame';

const data = () => Array.from({ length: 50 }, (_, i) => i + 1);

export default function App() {
  const [items, setItems] = useState(data());

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

