import {StyleSheet, View, Dimensions } from "react-native"
// import CreatePostsForm from "../components/CreatePostsForm"
import { Header, CreatePostsForm, SvgButton } from "../components"
import ArrowLeftSvg from "../assets/images/arrow-left.svg";



const CreatePostsScreen = () => {
    const back = () => alert('back')
    return (
        <View style={styles.container}>
            <Header title="Створити публікацію">
                <SvgButton styleButton={styles.buttonSvg} onPress={back} svgWidth='24' svgHeight='24' svgFile={ArrowLeftSvg} />
            </Header> 
           <CreatePostsForm/>
        </View>
    )
}

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingTop: 43,
        paddingBottom: 22,
        // columnGap: 32,
        rowGap: 32,
        //  maxHeight: windowHeight,
        // height: windowHeight,
        // justifyContent: 'center',
        // maxWidth: windowWidth
        // paddingHorizontal: 16,
        // paddingTop: 32,
    },
     buttonSvg: {
        maxWidth: 40,
        height: 40,
        position: 'absolute',
        bottom: 0,
       left: 10,
    }
})

export default CreatePostsScreen