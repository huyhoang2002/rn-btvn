import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const RegisterNote = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>lưu y: </Text>
      <Text style={{ marginTop: 5, fontWeight: "400", fontSize: 14}}>Ho ten phai la ten tren cac giay to tuy than nhu CMND/CCCD/Ho chieu</Text>
      <Text style={{ marginTop: 5, fontWeight: "400", fontSize: 14}}>Mat khau phai co do dai it nhat 6 ky tu, bao gom it nhat:</Text>
      <View style={{ marginTop: 5, marginLeft: 8}}>
        <View style={{ display: "flex", flexDirection: "row" }}>
            <Entypo name="dot-single" size={20} color="black" />        
            <Text style={{ width: "100%", fontSize: 13, fontWeight: "500"}}>1 ky tu hoa</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
            <Entypo name="dot-single" size={20} color="black" />        
            <Text style={{ width: "100%", fontSize: 13, fontWeight: "500"}}>1 ky tu so</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    textStyle: {
        color: "red"
    }
})

export default RegisterNote
