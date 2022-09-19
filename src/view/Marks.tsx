import React from 'react';
import {Text,View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppStatusBar from '../components/AppStatusBar';

function Marks(){
    return(
        <View>
            <AppStatusBar backgroundColor={'#C0E1F3'} barStyle="dark-content" />
            <Text>My Marks</Text>
        </View>

    )
}

export default Marks