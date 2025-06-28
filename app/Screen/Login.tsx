import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter()
  return (
    <View style={styles.container}>

      <Image style={styles.image} source={require('../../assets/images/unimuspace.png')} />
      <Text style={styles.welcomeText}>login or sign up </Text>
      
      <View style={styles.wrapper}>

        <TextInput
          style={styles.inputNIM}
          placeholder="NIM"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={() =>router.push('../Dashboard')} >
          <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    top: 50,
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  wrapper: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,

  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1E7AFF',
  },
  inputNIM: {
    height: 48,
    width: 300,
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    shadowColor: '',
  },
  inputPassword: {
    height: 48,
    backgroundColor: '#ffffff',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  button :{
    height: 48,
    backgroundColor: '#1E7AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  }
})

