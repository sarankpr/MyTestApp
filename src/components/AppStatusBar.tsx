import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

const AppStatusBar = ({...props}):any => {
    return (
        <View style={[ props.backgroundColor]}>
            <StatusBar backgroundColor={props.backgroundColor} {...props} />
        </View>
    );
};

const BAR_HEIGHT = StatusBar.currentHeight;

export default AppStatusBar;