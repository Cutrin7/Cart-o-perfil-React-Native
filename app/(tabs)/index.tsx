import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native';

/* 
Descrição: Crie uma interface de perfil com uma imagem de perfil, nome e uma breve descrição.

Instruções:
- Use um Image para a foto de perfil (você pode usar uma imagem online ou de exemplo).
- Adicione um Text para o nome e outro Text para a descrição.
- Estilize o cartão com bordas arredondadas, sombra e um layout centralizado.
*/

export default function HomeScreen() {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/100'}}
        style={styles.imagem}
      />
      <Text style={styles.nome}>Vitor Cutrin</Text>
      <Text style={styles.descricao}>Olá, me chamo Vitor, e pretendo me tornar um desenvolvedor full stack. Estou cursando ADS e estou no segundo semestre.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor:'#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 30,
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descricao: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});