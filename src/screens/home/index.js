import {StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>

        <View style={{flex: 1}}>
          <View style={styles.image}>

          </View>
          <View style={styles.body}>
            <Text style={styles.headerText}>Hello, Lets Chat</Text>
            <Text style={styles.titleText}>What are you doing today?</Text>
          </View>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
