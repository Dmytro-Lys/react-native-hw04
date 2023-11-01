import {  StyleSheet, View, Dimensions } from "react-native";
import SvgPlusButton from "./SvgPlusButton";
import SvgButton from "./SvgButton";
import GridSvg from "../assets/images/grid.svg";
import UserSvg from "../assets/images/user.svg";




const Footer = ({children}) => {
 

   
    return(
        <View style={styles.containerFooter}>
           
            {children}
        </View>
    )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
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
   
})

export default Footer