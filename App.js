

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from './src/pages/Contacts'
import Informations from './src/pages/Informations'

export default function App() {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Contacts" component={Contacts} />
                <Stack.Screen name="Informations" component={Informations} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

