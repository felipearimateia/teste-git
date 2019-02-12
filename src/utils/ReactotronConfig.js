import Reactotron from 'reactotron-react-native'

console.disableYellowBox = true

Reactotron
  .configure() // controls connection & communication settings
  .useReactNative({
    asyncStorage: { ignore: ['secret'] }
  }) // add all built-in react native plugins


  if (__DEV__) {
    Reactotron.connect()
    Reactotron.clear()
  }

Reactotron.onCustomCommand('test', () => console.tron.log('This is an example'))

console.tron = Reactotron
