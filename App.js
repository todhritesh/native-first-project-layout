import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , ScrollView } from 'react-native';
function handleAdd(){
  console.log('first')
}
export default function App() {
  return (
    <View style={style.container}>
      <ScrollView>
      <StatusBar Visible='hidden' />
      <View style={style.navbar}>
          <Text style={style.navbarLink} >Home</Text>
          <Text style={style.navbarLink} >About</Text>
          <Text style={style.navbarLink} >Contact</Text>
      </View>
      <View style={style.horizontalRule} />
      <View style={{padding:10}}>
        <Image style={style.banner} source={require("./assets/banner.png")} />
      </View>

      <View style={style.cardContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={style.card}>

          </View>
          <View style={style.card}>

          </View>
          <View style={style.card}>

          </View>
          <View style={style.card}>

          </View>
        </ScrollView>
      </View>
      
      <View style={style.trendingCardContainer}>
        <Text style={{fontSize:30,color:'white',textDecorationLine:"underline"}}>Trending Posts</Text>
        <View style={style.trendingCard}></View>
        <View style={style.trendingCard}></View>
        <View style={style.trendingCard}></View>
      </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    paddingTop:10,
    flex:1,
    backgroundColor:'#2f3640'
  },
  navbar:{
    flexDirection:'row',
    justifyContent:'space-evenly',
  },
  navbarLink:{
    fontSize:23,
    color:'white',
    fontWeight:'bold'
  },
  horizontalRule:{
    borderBottomColor:'#c4c0c0',
    borderBottomWidth:3,
    paddingTop:4,
    paddingBottom:4,
  },
  banner:{
    height:300,
    resizeMode:'cover',
    width:"100%",
  },
  cardContainer:{
    paddingTop:5,
    paddingLeft:8,
    paddingRight:8,
    flexDirection:'row',
    borderBottomColor:'#c4c0c0',
    borderTopColor:'#c4c0c0',
    borderBottomWidth:3,
    borderTopWidth:3,
    paddingTop:4,
    paddingBottom:4,
  },
  card:{
    backgroundColor:"#bdc3c7",
    width:150,
    height:150,
    margin:3
  },
  trendingCardContainer:{
    paddingTop:30,
    paddingLeft:20,
    paddingRight:20,
  },
  trendingCard:{
    width:"100%",
    marginTop:20,
    height:300,
    backgroundColor:"#bdc3c7",
  }
})

