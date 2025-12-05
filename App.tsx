import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

// Import screens
import HomeScreen from './screens/HomeScreen';
import CreateContentScreen from './screens/CreateContentScreen';
import ContentLibraryScreen from './screens/ContentLibraryScreen';
import ImageGeneratorScreen from './screens/ImageGeneratorScreen';
import ThreadBuilderScreen from './screens/ThreadBuilderScreen';
import VideoCreatorScreen from './screens/VideoCreatorScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'viral.ai',
            headerShown: false, // We'll handle our own header
          }}
        />
        <Stack.Screen
          name="CreateContent"
          component={CreateContentScreen}
          options={{
            title: 'Create Content',
          }}
        />
        <Stack.Screen
          name="ImageGenerator"
          component={ImageGeneratorScreen}
          options={{
            title: 'AI Image Generator',
          }}
        />
        <Stack.Screen
          name="ThreadBuilder"
          component={ThreadBuilderScreen}
          options={{
            title: 'Thread Builder',
          }}
        />
        <Stack.Screen
          name="VideoCreator"
          component={VideoCreatorScreen}
          options={{
            title: 'Video Creator',
          }}
        />
        <Stack.Screen
          name="ContentLibrary"
          component={ContentLibraryScreen}
          options={{
            title: 'Content Library',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Settings',
          }}
        />
        <Stack.Screen
          name="Analytics"
          component={HomeScreen} // Placeholder - would create AnalyticsScreen
          options={{
            title: 'Analytics',
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
