import CheckBox from 'expo-checkbox';
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const AcceptPolicy = () => {

  const [ isChecked, setIsChecked ] = useState(true) 

  return (
    <View style={style.containter}>
      <View>
        <CheckBox
            color={"#4299E1"}
            value={isChecked}
            onValueChange={(value) => setIsChecked(value)}
        />
      </View>
      <View>
        <Text style={{ width: "100%", color: "" }}>Toi da doc va dong y voi Dieu khoan su dung</Text>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    containter: {
        paddingHorizontal: 20,
        paddingVertical: 40,
        display: "flex",
        flexDirection: "row", 
        gap: 10
    }
})

export default AcceptPolicy
