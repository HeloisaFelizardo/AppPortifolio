import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Capa from './assets/capa.png';
import Foto from './assets/foto.png';


export default function App() {
  return (
    <View style={styles.container}>
      <Image style = {styles.fotoTopo} source={Capa} />
      <View style={styles.boxDescricao}>
        <Image style = {styles.fotoPerfil} source={Foto} />
        <Text style = {styles.titulo}>Heloisa Felizardo</Text>
        <Text style = {styles.cargo}>Técnologa em Comunicação para Web pela Universidade Paulista e desenvolvedora Front-end, especializada em HTML, CSS, JavaScript, React, React Native, Git. </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },

  fotoTopo: {
    flex: 1,
  },

  boxDescricao: {
    flex: 1,
    alignItems: 'center',
  },

  fotoPerfil: {
    marginTop:20,
    marginBottom:20,
    width: 100,
    height: 100,
    borderRadius:50
  },
  titulo: {
    marginBottom:10,
    fontSize: 22,
  },
  cargo: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16
  }
});
