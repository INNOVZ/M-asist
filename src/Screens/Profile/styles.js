import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
    },
    userArea:{
        height:'55%',
        borderBottomEndRadius:50,
        borderBottomLeftRadius:15,
        // alignItems:'center',
        // backgroundColor:'#6f8add',
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'center'
    },
    loginButton:{
        backgroundColor:'#6f8add',
        paddingVertical:12,
        paddingHorizontal:25,
        borderRadius:10,
    },
    signupButton:{
        paddingVertical:12,
        paddingHorizontal:25,
        borderRadius:10,
        borderColor:'#6f8add',
        borderWidth:0.5,
        marginLeft:15
    },
    loginText:{
        color:'#fff',
        fontSize:12,
        fontWeight:'600',
    },
    signupText:{
        color:'#6f8add',
        fontSize:12,
        fontWeight:'600',
    },
    bookText:{
        color:'#fff',
        fontSize:12,
        fontWeight:'600',
    },
    profileMenus:{
        height:350,
        width:'95%',
        marginVertical:20,
        marginLeft:'2.5%'
    },
    menu:{
        color:'#6f8add',
        fontSize:14,
        fontWeight:'500',
        padding:8,
        borderBottomColor:'#6f8add',
    }
})

export default Styles