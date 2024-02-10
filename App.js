//Importar librerias
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, ScrollViewBase} from 'react-native';
import TextComponent from './components/TextComponent';

const App = ()=> {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style = {styles.container5}></View>
        <View style = {styles.container2}>
        <Text style={styles.title}>Mi Biografia</Text>
        </View>
        <View style = {styles.container5}></View>
        <View style = {styles.container3}>
        <Image style={styles.image} source={require('./assets/Images/monito.jpg')}/>
        </View>
        <View style = {styles.container5}></View>
        <View style = {styles.container4}>
        <TextComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#363062'
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F99417'
  },
  container3: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#363062'
  },
  container4: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#363062'
  },
  container5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#363062',
    height: 40
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4D4C7D'
  },
  image: {
    width: 200,
    height: 200
  },
})

export default App;