import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Home } from './Home';
import { Resultado } from './Resultado';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor: '#c2c2c2',width: 200,}} drawerContentOptions={{
                activeTintColor: '#000',      
                activeBackgroundColor: '#fff',
                inactiveTintColor: '#505050'      ,
                inactiveBackgroundColor: '#303030',}}
                
                drawerType='slide'>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Resultado" component={Resultado}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
}