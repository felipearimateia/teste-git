/**
* @format
* @flow
*/
import React, { Component } from 'react'
import { Button, View, Text, FlatList, TextInput, TouchableHighlight } from 'react-native'
import { observer, inject } from 'mobx-react/native'


/* style and state */
import styles from './style'
import controller from './Controller'
import { toJS } from 'mobx';

type Props = {}

@inject('todos')
@observer
export default class Todos extends Component<Props> {


  openDetail = (item) => {
    console.tron.log(item)
  }

  renderItem = ({ item }) => {
    return (
      <TouchableHighlight onPress={()=> this.openDetail(item)}>
        <View>
          <Text style={styles.label}>{item}</Text>
          <View style={styles.line}/>
        </View>
      </TouchableHighlight>
    )
  }
  render () {
    console.log(JSON.stringify((controller.items)))
    return (
     <View style={{flex: 1}}>

     <View style={{flex: 1}}>
      <FlatList
        data={controller.items}
        extraData={toJS(controller.items)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
      />
     </View>

      <View style={styles.contentIpunt}>
        <TextInput
          returnKeyType='done'
          placeholder={'Nova Tarefa'}
          style={styles.input}
          value={controller.newTodo}
          onChangeText={(text) => controller.addTodo(text)}
        />

        <Button
          title='Salvar'
          onPress={()=> {controller.saveTodo()}}
        />
     </View>

     </View>
    )
  }
}
