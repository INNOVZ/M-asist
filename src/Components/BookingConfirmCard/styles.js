import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        marginTop:15,
        width:'95%',
        backgroundColor:'rgba(255, 255, 255, 1)',
        height:225,
        marginLeft:'2.5%',
        borderRadius:15,
        padding:20,
        shadowColor:'#676767',
        shadowRadius:5,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity:0.2,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:15,
    },
    nameField:{
        flex:1,
        color:'#7B8FCE',
        fontWeight:'700',
        fontSize:14,
    },
    name:{
        flex:1,
        color:'#333',
        fontWeight:'700',
        fontSize:14,
    },
    changeButton:{
        backgroundColor:'#7B8FCE',
        paddingVertical:12,
        paddingHorizontal:25,
        borderRadius:10,
    },
    cancelButton:{
        paddingVertical:12,
        paddingHorizontal:25,
        borderRadius:10,
        borderColor:'#7B8FCE',
        borderWidth:0.5,
        marginLeft:15
    },
    changeText:{
        color:'#fff',
        fontSize:12,
        fontWeight:'600',
    },
    cancelText:{
        color:'#7B8FCE',
        fontSize:12,
        fontWeight:'600',
    },
    buttons:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'center'
    },
})

export default Styles;