import { StyleSheet, ImageBackground, View, ScrollView } from 'react-native';
import { useState } from 'react';
import bgImage from '../assets/images/photo_bg.jpg'
import { AddAvatar, FormTitle } from '../components';
import defaultAvatar from '../assets/images/avatar.jpg'

const ProfileScreen = () => {
    const [avatar, setAvatar] = useState[defaultAvatar]
    const handleChangeAvatar = (_ , value) => setAvatar(value)
    const userName = 'Natali Romanova'
  return (
    
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.imageBg}>
        <View style={styles.profileContainer}>
            <AddAvatar avatarImage={avatar} handleChange={handleChangeAvatar} />
            <FormTitle text={userName} />
              
        </View>       
    </ImageBackground>  
        
  );
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
   profileContainer: {
       flex: 1,
    pozition: 'relative',   
    paddingHorizontal: 16,
    paddingTop: 92,
    // paddingBottom: formStyle.paddingBottom,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
   
});


export default ProfileScreen