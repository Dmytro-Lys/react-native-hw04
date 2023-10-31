import { View } from "react-native"
import SvgButton from "./SvgButton";
import CommentSvg from "../assets/images/message-circle.svg";
import LikeSvg from "../assets/images/thumbs-up.svg";
import MapPinSvg from "../assets/images/map-pin.svg";

const Post = ({ dataPost, visibleLikes = false }) => {
    const { image, postName, postLocation, postComents, postLikes } = dataPost
    const addComment = () => addComment;ErrorUtils('Add comment')
    return (
        <View style={styles.postContainer}>
            <Image style={styles.postImage} source={image} resizeMode="cover" />
            <Text style={styles.postName}>{postName}</Text>
            <View style={styles.bottomContainer}>
                <View style={styles.CLContainer}>
                    <SvgButton styleButton={styles.buttonSvg} onPress={addComment} svgWidth='24' svgHeight='24' svgFile={CommentSvg} fill={postComents > 0 ? '#FF6C00' : 'none'} />
                    <Text style={postComents > 0 ? styles.commentCounter : { ...styles.commentCounter, color: '#bdbdbd' }}>{postComents}</Text>
                    {visibleLikes && <>
                            <SvgButton styleButton={styles.buttonSvg} onPress={addComment} svgWidth='24' svgHeight='24' svgFile={LikeSvg} fill={postLikes > 0 ? '#FF6C00' : 'none'} />
                            <Text style={postLikes > 0 ? styles.commentCounter : { ...styles.commentCounter, color: '#bdbdbd' }}>{postLikes}</Text>
                        </>
                    }
                </View>
                <View style={styles.locationContainer}>
                    <SvgButton styleButton={styles.buttonMap} onPress={addComment} svgWidth='24' svgHeight='24' svgFile={MapPinSvg}/>
                    <Text style={styles.postLocation}>{postLocation}</Text>
                </View>    
            </View>
        </View>
    )
    
}

export default Post


const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        rowGap: 8,
    },
    postImage: {
        height: 240,
        width: 343,
         borderRadius: 8,
        overflow: 'hidden',
        
    },
    postName: {
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        color: '#212121',
      
    }
})