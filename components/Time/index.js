import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Time() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time === 0) return;

    const timeInterval = setInterval(() => {
      const seconds = time - 1;
      setTime(seconds > 0 ? seconds : 0);
      if (seconds === 0) {
        clearImmediate(timeInterval);
      }
    }, 1000);

    return () => {
      clearImmediate(timeInterval);
    }
  });



  return time
}