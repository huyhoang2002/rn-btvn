import { StyleSheet, View, Text } from 'react-native'
import Form from '../components/register/Form'

const RegisterForm = () => {
  return (
    <View style={{ position: "relative"}}>
        <View style={styles.container}></View>
        <View style={{ position: "absolute", zIndex: 1000 }}>
            <Form />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#B2F5EA"
    }
})

export default RegisterForm
