import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Dimensions } from "react-native";
import { LogOut } from "../components";
import PostsScreen from "./PostsScreen"
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import LogOutSvg from "../assets/images/log-out.svg";
import GridSvg from "../assets/images/grid.svg";
import UserSvg from "../assets/images/user.svg";

const Tabs = createBottomTabNavigator();

const Home = () => {
    return (
        <>
        {/* <PostsScreen /> */}
            <Tabs.Navigator>
                
                <Tabs.Screen name="Posts" component={PostsScreen} options={{
                     title: "Публікації",
                     headerStyle: styles.header,
                     headerTitleStyle: styles.textHeader,
                    headerRight: () => (<LogOut stylesLogOut={styles.logOut} />),
                     tabBarShowLabel: false,
                    //  headerLeft: () => null,
                }}/>
                <Tabs.Screen name="CreatePost" component={CreatePostsScreen} options={{
                     title: "Створити публікацію",
                     headerStyle: styles.header,
                    headerTitleStyle: styles.textHeader,
                     tabBarShowLabel: false,
                    //  tabBarShow: false,
                }} />    
            <Tabs.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
          
         </Tabs.Navigator>
        </>    
   )
}


const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
      header: {
         borderBottomWidth: 1,
        borderColor: "lightgray",
         shadowColor: 'rgba(0, 0, 0, 0.30)',
       },
  textHeader: {
        paddingTop: 12,
        width: windowWidth - 32,
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 22,
        color: '#212121',
  },
    containerFooter: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
         maxHeight: 52,
        height: 52,
        width: windowWidth,
        // marginBottom: 20,
        borderTopWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.30)',
        columnGap: 32,
        shadowOffsetHeight: -0.5,
        shadowColor: 'rgba(0, 0, 0, 0.30)',
    },
    logOut: {
       bottom: 0,
       right: 10,
    }
   
})

export default Home