import { StyleSheet, View, TouchableWithoutFeedback, KeyboardAvoidingView, Dimensions, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import PostContent from "../components/PostContent"
import CreatePostsInput from './CreatePostsInput';
import FormSubmitButton from './FormSubmitButton';
import SvgButton from './SvgButton';
import TrashSvg from "../assets/images/trash.svg";


const CreatePostsForm = () => {
    
    const defaultValues = {
        postImage: { value: null, validation: true },
        postName: { value: '', validation: true },
        postLocation: { value: '', validation: true }
    }
  
    const [formValues, setFormValues] = useState(defaultValues)
    const [isShownKeyboard, setIsShownKeyboard] = useState(false)
      
    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setIsShownKeyboard(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setIsShownKeyboard(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);
  
    const handleFormValueChange = (key, value) => {
        setFormValues(
            {
                ...formValues,
                [key]: { ...formValues[key], ...value }
            }
        );
    };
    
    const checkEmpty = () => Object.values(formValues).some(field => !field.value)

    const checkFormValidation = () => Object.values(formValues).every(field => field.validation)
    
    const reset = () => {
        setFormValues(
            {
                ...formValues,
                ...defaultValues
            });
    }

    const onSubmit = () => {
        const sendValues = Object.entries(formValues).reduce((obj, [key, value]) => {
            return {...obj, [key]: value.value }
        }, {})
        console.log(sendValues)
        reset()
    }

    return (
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                <View style={styles.formWrapper}>
                    <View style={isShownKeyboard ? { ...styles.form, paddingBottom: 0 } : styles.form}> 
                        <PostContent contentImage={formValues.postImage} handleChange={handleFormValueChange}/>
                        <View style={styles.formElements}>
                            <CreatePostsInput inputName="postName" handleChange={handleFormValueChange} inputValue={formValues.postName} />
                            <CreatePostsInput inputName="postLocation" handleChange={handleFormValueChange} inputValue={formValues.postLocation} />
                        </View>
                        {checkEmpty() || !checkFormValidation()
                            ? <FormSubmitButton text="Опублікувати" onPress={onSubmit} marginTop={31} buttonColor='#f6f6f6' textColor='#bdbdbd' disabled={true} />
                            : <FormSubmitButton text="Опублікувати" onPress={onSubmit} marginTop={31}/>
                        }
                        <SvgButton styleButton={isShownKeyboard ? { ...styles.buttonTrash, marginTop: 8 } : styles.buttonTrash} onPress={reset} svgWidth='24' svgHeight='24' svgFile={TrashSvg}  />
                    </View> 
                </View>
            </KeyboardAvoidingView> 
        </TouchableWithoutFeedback>     
    )
}
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: windowWidth,
  },
  form: {
    flex: 1,
    paddingHorizontal: 16,
    // paddingTop: 32,
    // paddingBottom: 22,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
  },
  formElements: {
    flex: 1,
    maxHeight: 116,  
    rowGap: 16,
    },
    buttonTrash: {
        maxWidth: 70,
        width: 70,
        maxHeight: 40,
        borderRadius: 40,
        backgroundColor: '#f6f6f6',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 108,
  }
 
});


export default CreatePostsForm