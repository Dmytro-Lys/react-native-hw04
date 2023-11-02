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
        maxHeight: 44,
        borderBottomWidth: 1,
        borderColor: "lightgray",
        shadowOffsetHeight: 0.5,
        shadowColor: 'rgba(0, 0, 0, 0.30)',
        width: windowWidth,
      },
    textHeader: {
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