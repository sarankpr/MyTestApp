import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/FontAwesome';

export function DashboardHeader(props: any) {
  return (
    <>
      <View style={{backgroundColor: '#fff'}}>
        <LinearGradient
          colors={['whitesmoke', 'whitesmoke']}
          style={styles.hearderLinearGradient}
          start={{x: 0, y: 1}}>
          <TouchableOpacity
            style={styles.headerLeftIcon}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Ionicons name="arrow-back" size={24} color="#1C5092" />
            <Text>\\\</Text>
          </TouchableOpacity>

          <Text style={styles.headerText}>{props.title} </Text>
        </LinearGradient>
      </View>
    </>
  );
}

export function DashboardHeaders(props: any) {
  return (
    <>
      <View style={{backgroundColor: '#fff'}}>
        <LinearGradient
          colors={['#C0E1F3', '#C0E1F3']}
          style={styles.hearderLinearGradient}
          start={{x: 0, y: 1}}>
          <TouchableOpacity
            style={styles.headerLeftIcon}
            onPress={() => {
              props.navigation.goBack();
            }}>
            {/* <Ionicons name="arrow-back" size={24} color="#1C5092" /> */}
            <Text>\\\</Text>
          </TouchableOpacity>

          <Text style={styles.headerText}>{props.title} </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Sidemenu')}>
            {/* <Icon
              name="bars"
              size={20}
              color="#1C5092"
              style={{marginTop: 25, marginRight: 25}}
            /> */}
            <Text>///</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </>
  );
}

export function DashboardHeader1(props: any) {
  return (
    <>
      <View style={{backgroundColor: '#fff'}}>
        <LinearGradient
          colors={['#C0E1F3', '#C0E1F3']}
          style={styles.hearderLinearGradient}
          start={{x: 0, y: 1}}>
          <TouchableOpacity
            style={styles.headerLeftIcon}
            onPress={() => {
              props.navigation.goBack();
            }}>
            {/* <Ionicons name="arrow-back" size={25} color="#1C5092" /> */}
            <Text>\\\</Text>
          </TouchableOpacity>

          <Text style={styles.headerText}>{props.title} </Text>
          <TouchableOpacity>
            <Text style={styles.headerTexts}>Mark all as read</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Sidemenu')}>
            {/* <Icon
              name="bars"
              size={20}
              color="#1C5092"
              style={{marginTop: 25, marginRight: 25}}
            /> */}
            <Text>///</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  hearderLinearGradient: {
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    color: 'white',
    fontSize: 18,
    height: 70,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: '#1C5092',
    fontSize: 18,
    flex: 1,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignSelf: 'center',

    // textAlign: 'center',
  },
  headerTexts: {
    color: '#1C5092',
    fontSize: 15,
    borderColor: '#1C5092',
    borderWidth: 1,
    padding: 5,
    marginTop: 20,
    marginRight: 30,
    borderRadius:5
  },
  headerLeftIcon: {
    padding: 20,
    marginTop: 3,
  },
  headerRightIcon: {
    flex: 0.1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
});
