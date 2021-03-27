import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        // backgroundColor:'#676767',
    },
    circle:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'#6f8add',
        alignItems:'center',
        justifyContent:'center',
    },
    heading:{
        marginTop:15,
        fontSize:14,
        fontWeight:'500',
        color:'#6f8add',
    }
})

export default Styles