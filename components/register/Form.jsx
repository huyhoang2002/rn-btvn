import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 
import RegisterNote from './RegisterNote';
import AcceptPolicy from './AcceptPolicy';

const Form = () => {
  return (
    <View>
        <View style={styles.container}>
            <View>
                <Text>Ho va ten</Text>
                <TextInput 
                    placeholder='Nhap ho va ten'
                    style={styles.textInput}
                />
            </View>
            <View>
                <Text>So dien thoai</Text>
                <TextInput 
                    placeholder='Nhap so dien thoai'
                    style={styles.textInput}
                />
            </View>
            <View>
                <Text>Mat khau</Text>
                    <TextInput 
                        placeholder='Nhap mat khau'
                        style={styles.textInput}
                    >                    
                    </TextInput>
            </View>
            <View>
                <Text>Xac nhan mat khau</Text>
                <TextInput 
                    placeholder='Xac nhan mat khau'
                    style={styles.textInput}
                />
            </View>
        </View>
        <RegisterNote />
        <AcceptPolicy />
        <View style={{ paddingHorizontal: 20}}>
            <TouchableOpacity style={{ backgroundColor: "#4FD1C5", padding: 14, borderRadius: 7, width: "94%"}}>
                <Text style={{ color: "white", fontSize: 15, textAlign: "center" }}>Dang ky tai khoan</Text>
            </TouchableOpacity>
        </View>
    </View>      
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginHorizontal: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10
    },  
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#EDF2F7',
        height: 50,
        borderStyle: "solid",
        fontStyle: "italic",
    }
})

export default Form
