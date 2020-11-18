import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import db from '../config';

export default class ReadStoryScreen extends React.Component {
  constructor(){
    super()
    this.state={
      allStories:[]
    }
  }
  componentDidMount(){
    this.getStories()
  }


  getStories=()=>{
    try{
      var allStories = []
      db.collection('newstories').get()
      .then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
          allStories.push(doc.data())
          console.log(allStories)
        })
        this.setState({
          allStories: allStories
        })
      })
    }
    catch{
      console.log(error)
    }
  }
    render(){
        return(
            <View >
                <FlatList 
                data = {this.state.allStories}
                renderItem={({item})=>(
                  <View style = {styles.itemContainer}>
                    <Text>TITLE: {item.title}</Text>
                    <Text>Author: {item.author}</Text>
                    </View>
                )}
                keyExtractor = {(item,index)=>index.toString()}

                
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer:{
    height:80,
    width:'100%',
    borderWidth:2,
    justifyContent:'center',
    alignItems:'center'
  }
});