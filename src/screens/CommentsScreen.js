import {  ScrollView, StyleSheet, View, Text, Image } from "react-native";
import { Header, Avatar, Footer, SvgButton, CommentInput } from "../components";
import defaultAvatar from '../assets/images/avatar.jpg'
import PostImage from '../assets/images/second-post.jpg'
import LogOutSvg from "../assets/images/log-out.svg";
import GridSvg from "../assets/images/grid.svg";
import UserSvg from "../assets/images/user.svg";

const CommentsScreen = () => {
 const back = () => alert('back')
    return (
        
        <View style={styles.container}>
            <Header title="Коментарі">
                <SvgButton styleButton={styles.buttonSvg} onPress={back} svgWidth='24' svgHeight='24' svgFile={ArrowLeftSvg} />
            </Header> 
            <View style={styles.contentContainer}>
                <Image style={styles.postImage} source={PostImage} resizeMode="cover" />
                {/* <ScrollView>

                </ScrollView> */}
                <CommentInput/>
            </View>    
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
         alignItems: 'flex-end',
        paddingTop: 43,
    },
    contentContainer: {
        paddingTop: 32,
        paddingHorizontal: 16,
    },
     buttonSvg: {
        maxWidth: 40,
        height: 40,
        position: 'absolute',
        bottom: 0,
       left: 10,
    },
      postImage: {
        height: 240,
        width: 343,
         borderRadius: 8,
        overflow: 'hidden',
    },
      
})

export default CommentsScreen