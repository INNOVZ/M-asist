import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        marginTop:15,
        width:'95%',
        backgroundColor:'rgba(255, 255, 255, 1)',
        height:225,
        marginLeft:'2.5%',
        borderRadius:7,
        padding:20,
        shadowColor:'#676767',
        shadowRadius:5,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity:0.2,
    },
    topArea:{
        flexDirection:'column',
        height:120,
    },
    labDetails:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },  
    labName:{
        fontSize:16,
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
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
    },
    labOpening:{
        color:'#555',
        fontSize:12,
        fontWeight:'600',
    },
    line:{
        height:5,
        width:100,
    },
    bottomArea:{
        flexDirection:'row',
        height:40,
        alignItems:'center',
        justifyContent:'space-between',
    },
    icon:{
        marginRight:15,
    },
    availability:{
        color:'#7B8FCE',
        fontWeight:'700',
        fontSize:12,
    },
    availabilityDate:{
        // width:10,
        // height:10,
        borderColor:'#7B8FCE',
        color:'#555',
        fontWeight:'700',
        fontSize:12,
    },

    bookButton:{
        backgroundColor:'#7B8FCE',
        paddingVertical:12,
        paddingHorizontal:25,
        borderRadius:10,
    },
    bookText:{
        color:'#fff',
        fontSize:12,
        fontWeight:'600',
    }
})

export default Styles