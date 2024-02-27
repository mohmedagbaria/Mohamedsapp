import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigation from './routes/nav'

export default function App() {
  return (
    <View style={styles.containers}>
      <MainNavigation />

    </View>
  )
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
  }
}
)