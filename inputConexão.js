import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Senha from '../styles/senhaStyle';

const VerificationCodeInput = () => {
const inputRefs = Array.from({ length: 6 }, () => useRef(null));

const handleInputChange = (value, index) => {
if (value.length === 1 && index < inputRefs.length - 1) {
    inputRefs[index + 1].current.focus();
}
};

const handleKeyPress = (e, index) => {
if (e.nativeEvent.key === 'Backspace' && index > 0) {
    inputRefs[index - 1].current.focus();
}
};

return (
<View style={Senha.blocoCodigo}>
    {inputRefs.map((_, index) => (
    <TextInput
        key={index}
        ref={inputRefs[index]}
        style={Senha.codInput}
        keyboardType="numeric"
        maxLength={1}
        onChangeText={(value) => handleInputChange(value, index)}
        onKeyPress={(e) => handleKeyPress(e, index)}
    />
    ))}
</View>
);
};

const styles = StyleSheet.create({
container: {
flexDirection: 'row',
justifyContent: 'center',
},
input: {
width: 40,
height: 40,
borderWidth: 1,
borderColor: '#000',
textAlign: 'center',
fontSize: 20,
marginHorizontal: 5,
},
});

export default VerificationCodeInput;
