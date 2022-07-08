import { ImageBackground, StatusBar} from 'react-native';
import styles from './App.components.style';

import background from './assets/image/bg.png';

export default function App() {
  return (
    <>
      <StatusBar hidden = {true}/>
      <ImageBackground
        source={background}
        style={styles.backgroundImage}
      >

      </ImageBackground>
    </>
  );
}

