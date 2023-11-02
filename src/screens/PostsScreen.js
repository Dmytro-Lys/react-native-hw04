import {  ScrollView, StyleSheet, View, Text } from "react-native";
import { Header, Avatar, Footer, SvgButton, SvgPlusButton } from "../components";
import defaultAvatar from '../assets/images/avatar.jpg'
import LogOutSvg from "../assets/images/log-out.svg";
import GridSvg from "../assets/images/grid.svg";
import UserSvg from "../assets/images/user.svg";


const PostsScreen = () => {
    const logOut = () => alert("LogOut")
    const addPost = () => alert("Add Post")

    const showEverythin = () => alert("Show everythin")

    const showUser = () => alert("Show user")
    
    return (
        <View style={styles.container}>
            {/* <Header title="Публікації">
                <SvgButton styleButton={styles.buttonSvg} onPress={logOut} svgWidth='24' svgHeight='24' svgFile={LogOutSvg} />
            </Header> */}
            <ScrollView style={styles.postsContainer}>
                <View style={styles.userContainer}>
                    <Avatar avatarImage={defaultAvatar}  />
                    <View style={styles.userTextContainer}>
                        <Text style={styles.userText}>Natali Romanova</Text>
                        <Text style={styles.emailText}>test@mail.com</Text>
                    </View>
                </View>    
            </ScrollView>
{/* 
            <Footer>
                <SvgButton styleButton={styles.buttonSvgFooter} onPress={showEverythin} svgWidth='24' svgHeight='24' svgFile={GridSvg}/>
                <SvgPlusButton onPress={addPost} styleButton={styles.buttonAdd} stroke='white' />
                <SvgButton styleButton={styles.buttonSvgFooter} onPress={showUser} svgWidth='24' svgHeight='24' svgFile={UserSvg} />
            </Footer> */}

       </View>     
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        // paddingTop: 43,
    },
    postsContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
    userContainer: {
        flexShrink: 1,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 8,
    },
    userTextContainer: {
        flex: 1,
        flexDirection: 'column',
        maxHeight: 60,
    },
    userText: {
        fontFamily: 'Roboto-Bold',
        fontSize: 13,
        color: '#212121',
    },
    emailText: {
         fontFamily: 'Roboto-Regular',
        fontSize: 11,
        color: 'rgba(33, 33, 33, 0.80)',
    },
     buttonSvg: {
        maxWidth: 40,
        height: 40,
        position: 'absolute',
        bottom: 0,
        right: 10,
    },
      buttonAdd: {
        maxWidth: 70,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#FF6C00',
    },
    buttonSvgFooter: {
        maxWidth: 40,
        height: 40,
        
    }
})

export default PostsScreen;