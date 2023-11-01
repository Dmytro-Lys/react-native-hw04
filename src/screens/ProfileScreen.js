import { StyleSheet, ImageBackground, View, ScrollView, Dimensions } from 'react-native';
import { useState } from 'react';
import bgImage from '../assets/images/photo_bg.jpg'
import { AddAvatar, FormTitle, Footer, SvgButton, SvgPlusButton } from '../components';
import defaultAvatar from '../assets/images/avatar.jpg'
import GridSvg from "../assets/images/grid.svg";
import UserSvg from "../assets/images/user-white.svg";
import LogOutSvg from "../assets/images/log-out.svg";

const ProfileScreen = () => {
  const [avatar, setAvatar] = useState(defaultAvatar)
  // console.log(avatar)
  const handleChangeAvatar = (_, value) => { setAvatar(value) }
  const userName = 'Natali Romanova'
    const logOut = () => alert("LogOut")
  
    const addPost = () => alert("Add Post") 

    const showEverythin = () => alert("Show everythin")

    const showUser = () => alert("Show user")

  return (
    
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.imageBg}>
        <View style={styles.profileContainer}>
            <AddAvatar avatarImage={avatar} handleChange={handleChangeAvatar} />
            <SvgButton styleButton={styles.buttonSvgLogOut} onPress={logOut} svgWidth='24' svgHeight='24' svgFile={LogOutSvg} />
            <FormTitle text={userName} />
              
      </View>       
       <Footer>
                <SvgButton styleButton={styles.buttonSvgFooter} onPress={showEverythin} svgWidth='24' svgHeight='24' svgFile={GridSvg}/>
                <SvgButton styleButton={styles.buttonUserSvg} onPress={showUser} svgWidth='24' svgHeight='24' svgFile={UserSvg} stroke='white' />
                <SvgPlusButton onPress={addPost} styleButton={styles.buttonSvgFooter} stroke='#212121' />
            </Footer>
     </ImageBackground>  
        
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'flex-end',
    paddingTop: 119,
  },
   profileContainer: {
     flex: 1,
     flexDirection: 'column',
    width: windowWidth, 
    pozition: 'relative',   
    paddingHorizontal: 16,
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
     buttonSvgFooter: {
        maxWidth: 40,
        height: 40,
  },
      buttonSvgLogOut: {
        maxWidth: 40,
        height: 40,
        position: 'absolute',
        top: 22,
        right: 16,
  },
  buttonUserSvg: {
       maxWidth: 70,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#FF6C00',
    }
   
});


export default ProfileScreen