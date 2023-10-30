import { StyleSheet, ImageBackground, } from 'react-native';
import bgImage from '../assets/images/photo_bg.jpg'

import {Form} from '../components';

const RegistrationScreen = () => {
  
  
  return (
    
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.imageBg}>
      <Form
        fields={["userName", "email", "password"]}
        formStyle={styles.form}
        fieldsStyle={styles.formElements}
        formTitle="Реєстрація"
        submitButtonText="Зареєструватися"
        linkButtonText="Вже є акаунт? Увійти"
        addAvatar={true}
      >
      </Form>
    </ImageBackground>  
        
  );
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
   box: {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{translateX: -50}],
  },
  buttonAdd: {
    position: 'absolute',
    right: -12.5,
    bottom: 12.5,
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ff6c00',
  },
  buttonRemove: {
     borderColor: '#e8e8e8',
  }, 
   form: {
    paddingTop: 92,
    paddingBottom: 45,
  },
   formElements: {
      maxHeight: 182,
  },
 
});


export default RegistrationScreen;