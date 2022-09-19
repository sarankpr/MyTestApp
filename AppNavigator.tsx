import React from 'react';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './src/Dashboard';
import Attendance from './src/view/Attendance';
import Calendar from './src/view/Calendar';
import Fees from './src/view/Fees';
import ENotice from './src/view/ENotice';
import Marks from './src/view/Marks';
import Notification from './src/IconPages/Notification';
import SideMenu from './src/IconPages/Sidemenu';

import { DashboardHeader, DashboardHeaders, DashboardHeader1, } from './src/components/DashboardHeader';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    const Dashboardnav = [
        { id: '1', fname: 'Attendance', cname: Attendance, title: 'Attendance' },
        { id: '2', fname: 'Calendar', cname: Calendar, title: 'Calendar' },
        { id: '3', fname: 'Fees', cname: Fees, title: 'Fees' },
        { id: '4', fname: 'ENotice', cname: ENotice, title: 'ENoticeBoard' },
        { id: '5', fname: 'Marks', cname: Marks, title: 'Marks/Result' },
    ]


    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Dashboard"
                screenOptions={{ animation: 'slide_from_bottom' }}
            >
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ headerShown: false }}
                />

                {/* <Stack.Screen
                    name="Attendance"
                    component={Attendance}
                    options={{ headerShown: true }}
                />

                <Stack.Screen
                    name="Calendar"
                    component={Calendar}
                    options={{ headerShown: true }}
                />

                <Stack.Screen
                    name="Fees"
                    component={Fees}
                    options={{ headerShown: true }}
                />

                <Stack.Screen
                    name="ENotice"
                    component={ENotice}
                    options={{ headerShown: true }}
                />

                <Stack.Screen
                    name="Marks"
                    component={Marks}
                    options={{ headerShown: true }}
                /> */}

                {Dashboardnav.map(dash => (
                    <Stack.Screen
                        key={dash.id}
                        name={dash.fname}
                        component={dash.cname}
                        options={{
                            headerTitleStyle: { color: '#fff' },
                            header: props => (
                                <DashboardHeaders title={dash.title} {...props} />
                            ),
                        }}
                    />
                ))}

                <Stack.Screen
                    name="Notification"
                    component={Notification}
                    options={{
                        headerTitleStyle: { color: '#fff' },
                        header: props => (
                            <DashboardHeader1 title="Notifications" {...props} />
                        ),
                    }}
                />

                <Stack.Screen
                    name="Sidemenu"
                    component={SideMenu}
                    options={{
                        headerTitleStyle: { color: '#fff' },
                        headerStyle: {
                            backgroundColor: '#fff',
                        },
                        header: props => <DashboardHeader title="" {...props} />,
                    }}
                />


            </Stack.Navigator>


        </NavigationContainer>

    )
}

export default AppNavigator
