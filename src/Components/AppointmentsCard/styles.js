import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        marginTop:15,
        width:'95%',
        backgroundColor:'rgba(255, 255, 255, 1)',
        height:300,
        marginLeft:'2.5%',
        borderRadius:7,
        padding:20,
        shadowColor:'#676767',
        shadowRadius:5,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity:0.2,
    },
    labDetails:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },  
    labName:{
        fontSize:15,
        color:'#7B8FCE',
        fontWeight:'700',
    },
    image:{
        width:50,
        height:50,
    },
    labAddress:{
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
    },
    labStreet:{
        color:'#555',
        fontSize:12,
        fontWeight:'600',
    },
    labTiming:{
        // borderColor:'#7B8FCE',
        // borderWidth:1,
        padding:7,
        borderRadius:5,
        // marginTop:15,
        flexDirection:'row',
        alignItems:'center',
    },
    testTime:{
        marginTop:15,
        color:'#555',
        fontSize:12,
        fontWeight:'600',
        flex:0.9,
    },
    icon:{
        marginRight:15,
    },
    testDetails:{
        // borderColor:'#7B8FCE',
        // borderWidth:1,
        padding:7,
        borderRadius:5,
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
    },
    examName:{
        fontSize:13,
        fontWeight:'500',
        color:'#333',
        marginLeft:15,
    },
    bottomArea:{
        flexDirection:'row',
        height:38,
        alignItems:'center',
        justifyContent:'space-between',
    },
    test:{
        color:'#7B8FCE',
        fontWeight:'700',
        fontSize:12,
        marginTop:15,
        flex:0.5,
    },
    testName:{
        borderColor:'#7B8FCE',
        color:'#555',
        fontWeight:'700',
        fontSize:12,
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
        flexDirection:'row',
    },
})

export default Styles;