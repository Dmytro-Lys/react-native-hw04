import {StyleSheet, ImageBackground } from "react-native"


const PostContent = (contentImage = null) => {
    return (
        <ImageBackground source={contentImage } resizeMode="cover" style={styles.contentImage} />
   )
}

 const styles = StyleSheet.create({
   contentImage: {
      flex: 1,
      justifyContent: 'center',
      borderRadius: 8,
      maxWidth: '100%',
      maxHeight: 240,
      width: size,
      height: size, 
      backgroundColor: '#f6f6f6',
      overflow: 'hidden',
  },
 
});

export default PostContent