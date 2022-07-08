import { ImageBackground, StatusBar, SafeAreaView, Text, View } from 'react-native';
import styles from './App.components.style';

import background from './assets/image/bg.png';

export default function App() {
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
              <Text>Icon</Text>
              <Text>10</Text>
            </View>
            <View style={styles.infoTime}>
              <Text>Icon</Text>
              <Text>60</Text>
            </View>
          </View>
          <View style={styles.play}></View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

