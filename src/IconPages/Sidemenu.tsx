import {
    View,
    Text,
    StyleSheet,
    Touchable,
    TouchableOpacity,
    Image
  } from 'react-native';
  import React,{useContext} from 'react';
//   import Icon from 'react-native-vector-icons/FontAwesome';
//   import Icon3 from 'react-native-vector-icons/FontAwesome';
//   import Icon1 from 'react-native-vector-icons/MaterialIcons';
//   import Icon2 from 'react-native-vector-icons/Ionicons';
//   import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
  import AppStatusBar from '../components/AppStatusBar';
//   import AsyncStorage from '@react-native-async-storage/async-storage';
  //import { AppContext } from '../../survey/datas/context';
  
  
  export default function SideMenu({navigation}: any) {
    let STORAGE_KEY = 'AUTH_TOKEN';
    //const {isLogged,setisLogged} = useContext(AppContext);
  
  
    async function logout(){
    //   try {
    //     await AsyncStorage.setItem(STORAGE_KEY,"");
    //     await AsyncStorage.setItem("uservalues","");
    //     setisLogged(false);
    //     // navigation.navigate("HomePage")
    //     }catch(err){
    //       console.log(err);
          
    //     }
    }
  
    return (
      <View style={styles.navcontainer}>
         <AppStatusBar backgroundColor={'#f5f5f5'} barStyle="dark-content" />
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.buttonset}>
            {/* <Icon name="home" size={25} color="#1C5092" /> */}
            {'    '}Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('StudentProfile')}>
          <Text style={styles.buttonset}>
            {/* <Icon1 name="perm-contact-cal" size={25} color="#1C5092" /> */}
            {'    '}Student Profile
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={logout}>
          <Text style={styles.buttonset}>
            {/* <Icon3 name="sign-out" size={25} color="#1C5092" /> */}
            {'    '}Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  const styles = StyleSheet.create({
    navcontainer: {
      margin: 30,
      position: 'relative',
      bottom: 30,
    },
    buttonset: {
      fontSize: 20,
      marginTop: 10,
      marginBottom: 10,
      color: '#1C5092',
      borderBottomWidth: 1,
      paddingVertical: 5,
      borderBottomColor: '#bdc5d8',
    },
    icons: {
      display: 'flex',
      flexDirection: 'row',
    },
  });
  