import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

import define from './../../contains/define';

export default function Time({ onResponse, startGame, timeOut }) {
  const [time, setTime] = useState(timeOut);

  useEffect(() => {
    if (!startGame) {
      setTime(timeOut);
    } else {
      if (time === 0) return;

      const timeInterval = setInterval(() => {
        const seconds = time - 1;
        setTime(seconds > 0 ? seconds : 0);
        if (seconds === 0) {
          clearImmediate(timeInterval);
          onResponse(true);
        }
      }, 1000);

      return () => {
        clearImmediate(timeInterval);
      }
    }
  });



  return time
}