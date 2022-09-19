import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
//import ProfileNameView from '../../components/ProfileNameView';
import AppStatusBar from '../components/AppStatusBar';

export default function Notification() {
  return (
    <View style={{backgroundColor:"#C0E1F3",flex:1}}>
      <View style={{borderTopLeftRadius:25,borderTopRightRadius:25,backgroundColor:"#fff",flex:1,marginTop:15}}>
        <AppStatusBar backgroundColor={'#C0E1F3'} barStyle="dark-content" />
        {/* <ProfileNameView /> */}
        <View style={styles.navcontainer}>
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            No Notifications Available
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  navcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
