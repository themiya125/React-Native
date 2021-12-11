import React  from 'react';
import { createStackNavigator } from 'react-navigation';//install package
import MainActivity from "./Componant/mainactivity";
import SecondActivity from "./Componant/secondactivity";




export default App = createStackNavigator(
    //create navigation screens
    {
        First: { screen: MainActivity },//for main screen we have used first. Here its only type of variable.
        Second: { screen: SecondActivity }//second screen reference
    });

