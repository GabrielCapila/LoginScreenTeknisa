import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';

import TelaLogin from '../containers/TelaLogin/TelaLogin'
import { createAppContainer } from 'react-navigation';
import TelaCardapio from '../containers/TelaCardapio/TelaCardapio'

const Stack = createStackNavigator(
    {
        TelaLogin,
        TelaCardapio
    },
    {
        headerMode: 'none',
        initialRouteName:'TelaLogin'
    }
)

const Router = createAppContainer(Stack)

export default Router