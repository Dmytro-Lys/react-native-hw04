import { StyleSheet, View, Text, Dimensions } from "react-native";
import PropTypes from "prop-types";



const Header = ({ title, children }) => {
    
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.textHeader}>{title}</Text>
           {children}
       </View>
   )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    containerHeader: {
        flex: 1,
        position: 'relative',
        flexDirection: 'row',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent:"flex-end",
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginTop: 43,
        maxHeight: 44,
        height: 44,
        borderBottomWidth: 1,
        borderColor: "lightgray",
        shadowOffsetHeight: 0.5,
        shadowColor: 'rgba(0, 0, 0, 0.30)',
        width: windowWidth,
      },
    textHeader: {
        maxHeight: 44,
        height:44,
        width: windowWidth,
        paddingVertical: 11,
        fontFamily: 'Roboto-Medium',
        fontSize: 17,
        textAlign: 'center',
        lineHeight: 22,
        color: '#212121',
    }
})

export default Header;

Header.propTypes = {
   title: PropTypes.string.isRequired 
}