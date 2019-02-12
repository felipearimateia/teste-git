/**
* @format
* @flow
*/

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Todos from '../screens/Todos'

const Routes = createStackNavigator({
  todos: {
    screen: Todos,
    navigationOptions: {
      title: 'Tarefas'
    }
  }
})

export default createAppContainer(Routes)
