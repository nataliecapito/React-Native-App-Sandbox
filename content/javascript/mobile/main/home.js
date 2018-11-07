// general: the home page of the application.

// @flow
import React, { Component } from 'react'
// node packages
import { View, Text } from 'react-native'

type Props = {} // none.

export default class MainHome extends Component {
  props: Props

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, World!</Text>
      </View>
    )
  }
}
