import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Routes} from './Routes';

import Presentation from '../screens/Presentation/Presentation';
import Bancos from '../screens/Bancos/Bancos';
import DatosDeContacto from '../screens/DatosDeContacto/DatosDeContacto';
import ConfirmarMensaje from '../screens/ConfirmarMensaje/ConfirmarMensaje';
import ConfirmarCorreo from '../screens/ConfirmarCorreo/ConfirmarCorreo';
import EditarCorreo from '../screens/EditarCorreo/EditarCorreo';
import Confirmado from '../screens/Confirmado/Confirmado';
import AccessCamera from '../screens/Biometria/AccessCamera';
import ConfirmAccessCamera from '../screens/Biometria/ConfirmAccessCamera';

const Stack = createStackNavigator();

const MainNavigation = () => {
	return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Presentation}>
      <Stack.Screen name={Routes.Presentation} component={Presentation} />
      <Stack.Screen name={Routes.Bancos} component={Bancos} />
      <Stack.Screen name={Routes.DatosDeContacto} component={DatosDeContacto} />
      <Stack.Screen
        name={Routes.ConfirmarMensaje}
        component={ConfirmarMensaje}
      />
      <Stack.Screen name={Routes.ConfirmarCorreo} component={ConfirmarCorreo} />
      <Stack.Screen name={Routes.EditarCorreo} component={EditarCorreo} />
      <Stack.Screen name={Routes.Confirmado} component={Confirmado} />
      <Stack.Screen name={Routes.AccessCamera} component={AccessCamera} />
      <Stack.Screen name={Routes.ConfirmAccessCamera} component={ConfirmAccessCamera} />
    </Stack.Navigator>
  );
};


export default MainNavigation;