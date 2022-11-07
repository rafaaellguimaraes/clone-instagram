import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Lista from "./src/Lista";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'Rafael Guimarães',
          descricao: 'Mais um dia de muitos bus :)',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao:'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false, 
          likers: 0
        },
        {
          id: '2',
          nome: 'MegaMix',
          descricao: 'Isso sim é ser raiz!!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3',
          nome: 'Jhony Baraldo',
          descricao: 'Bora trabalhar rs',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false, 
          likers: 0
        },
        {
          id: '4',
          nome: 'Hunter',
          descricao: 'Ser TI é isso',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil4.png',
          imgPublicacao:'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false, 
          likers: 0
        },
        {
          id: '5',
          nome: 'Athos Julio',
          descricao: 'Boa tarde...',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil5.png',
          imgPublicacao:'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, likers: 0
        },
      ]
    };
  }

render() {
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              resizeMode="cover"
              source={require('./src/img/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode="cover"
              source={require('./src/img/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>

        </View>
        <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={this.state.feed}
        renderItem={({item}) => <Lista data={item}/>}
        />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  header:{
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    //Borda abaixo da logo e send
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1
  },
  send:{
    width: 23,
    height: 23
  },
  logo:{

  }
})

export default App;