/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {useState} from 'react'
import { wrap } from 'yargs';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// import 'react-native/Libraries/NewAppScreen/components/logo.png'

// const Section = ({children, title}) => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const personData = [
  {
    id: '1',
    name: 'Souvik Roy',
    address: 'Siliguri',
    email: 'roy123@gmail.com',
    contact: '9933551010',
    image: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    id: '2',
    name: 'Shivam Kumar',
    address: 'Katihar',
    email: 'kumar123@gmail.com',
    contact: '8080781010',
    image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '3',
    name: 'Sowmya Anand',
    address: 'Bangalore',
    email: 'anand123@gmail.com',
    contact: '7473992920',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '4',
    name: 'Mayank Pal',
    address: 'Bhopal',
    email: 'mayank123@gmail.com',
    contact: '8908780978',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: '5',
    name: 'Tania Mishra',
    address: 'Noida',
    email: 'tania123@gmail.com',
    contact: '7109186081',
    image: 'https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
];

const Card = ({name, address, email, contact, image })=>(
  
  <View style={styles.card}>
    <View style={styles.profile}>
      <Image source={{uri:image}} style={styles.profileImage}/>
      {/* <Image
        style={styles.profileImage}
        source={{
          uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        }}
      /> */}
    </View>

    <View>
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardDescription}>{address}</Text>
      <Text style={styles.cardDescription}>{email}</Text>
      <Text style={styles.cardDescription}>{contact}</Text>
    </View>
  </View>
);

const App= () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  

  const [text, setText]= useState("Clicked: ") 
  const [count, setCount]= useState(0)
  
  const clickHandler=()=>{
    setCount(count+1)
  }

  const renderCards = ({item}) => (
      <Card name={item.name} address={item.address} email={item.email} contact={item.contact} image={item.image} />
  );

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.js</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debug">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>

    
    <View style={styles.container}>
      <StatusBar style="auto"/>
      {/* <ScrollView> */}
      <View style={{backgroundColor:"#000", width:"90%", minHeight:"30%", borderRadius:10, marginHorizontal:"10%",marginVertical:18, justifyContent:"center", alignItems:"center"}}>
        <Image source={require("react-native/Libraries/NewAppScreen/components/logo.png")} style={styles.logo}/>
        <Text style={styles.sectionTitle}>AWESOME</Text>
        <Text style={styles.sectionDescription}>The <Text style={{color:"#555",fontSize: 32,fontWeight: '900', }}>TEXT </Text> component works</Text>
        <Text style={styles.boxHighlight}>{text==="Clicked: " ? text : `${text} Clicked: ` }{count}</Text>
      </View>
  
      <TextInput style={{borderWidth:1, width:"90%", minHeight:"6%", padding:4}} placeholder="Enter Text Here" onChangeText={setText}/>
  
      <TouchableOpacity onPress={clickHandler} style={styles.button} activeOpacity={0.8}><Text style={styles.highlight}>Press Here</Text></TouchableOpacity>
  
      <View style={styles.cardContainer}>
        <FlatList
          data={personData}
          renderItem={renderCards}
          keyExtractor={item => item.id}
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '900',
    color:"#555"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: '600',
    color:"#555"
  },
  highlight: {
    fontWeight: '900',
    fontSize:25,
    color:"#588d6f",
    margin:5
  },
  boxHighlight:{
    fontWeight: '900',
    fontSize:25,
    color:"#2fcfcf",
    margin:5
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#6f7f6f",
  },
  logo: {
    position:"absolute",
    resizeMode:"contain",
    width:"100%",
    height:"100%",
    opacity:0.185,
  },
  button:{
    alignItems: "center",
    backgroundColor: "#deefef",
    paddingHorizontal: 107,
    paddingVertical:5,
    marginTop:15,
    borderRadius:11
  },
  cardContainer:{
    flex: 1,
    alignItems: "center",
    backgroundColor:"#6f7f6f",
    marginTop:4,
    width:"100%"
  },
  card:{
    width:"96.5%",
    height:135,
    backgroundColor:"#000",
    margin:8,
    padding:2,
    flexDirection:"row",
    flexWrap:"wrap",
    borderRadius:10,
    // justifyContent:'space-between'
  },
  cardTitle:{
    fontSize:25,
    fontWeight:'900',
    color:"#588d6f",
  },
  cardDescription:{
    marginTop: 4,
    fontSize: 18,
    fontWeight: '600',
    color:"#555"
  },
  profile:{
    width:"36%",
    height:140,
    margin:6
  },
  profileImage:{
    width:120,
    height:120,
    borderRadius:5,
    padding:10
    // resizeMode:"contain",
  }
  
});

export default App;
