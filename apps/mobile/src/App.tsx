import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { HomeScreen } from './screens/HomeScreen';
import { CatalogScreen } from './screens/CatalogScreen';
import { MilestonesScreen } from './screens/MilestonesScreen';
import { LibraryScreen } from './screens/LibraryScreen';
import { SubscriptionBoxScreen } from './screens/SubscriptionBoxScreen';
import type { RootStackParamList } from './navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#F7FBFF' },
          headerTitleStyle: { color: '#0A3D7A' },
          contentStyle: { backgroundColor: '#F7FBFF' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'CradleCare' }} />
        <Stack.Screen name="Catalog" component={CatalogScreen} options={{ title: 'Catalog' }} />
        <Stack.Screen name="Milestones" component={MilestonesScreen} options={{ title: 'Milestone Tracker' }} />
        <Stack.Screen name="Library" component={LibraryScreen} options={{ title: 'Resource Library' }} />
        <Stack.Screen name="SubscriptionBox" component={SubscriptionBoxScreen} options={{ title: 'Subscription Boxes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

