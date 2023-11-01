import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import {RegistrationScreen, LoginScreen, PostsScreen, CreatePostsScreen, ProfileScreen, CommentsScreen} from './src/screens'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Inter-Medium': require('./src/assets/fonts/Inter-Medium.ttf'),
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      {/* <RegistrationScreen/> */}
      {/* <LoginScreen /> */}
      {/* <PostsScreen /> */}
      {/* <ProfileScreen /> */}
       <CommentsScreen/>
       {/* <CreatePostsScreen/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  
});
