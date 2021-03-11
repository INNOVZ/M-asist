import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#E6E8F0',
        height:900
        // backgroundColor:'#E6E8F0',
    },
    image:{
        width:'100%',
        height:350,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingBottom:15
    },
    headerArea:{
        height:350,
        borderBottomEndRadius:50,
        borderBottomLeftRadius:15,
        // justifyContent:'space-around',
        // alignItems:'center',
        padding:'5%'
    },
    welcomeUser:{
        fontSize:28,
        fontWeight:'700',
        color:'#fff',
        marginTop:25,
    },
    welcomeMessage:{
        fontSize:16,
        fontWeight:'600',
        marginTop:15,
        color:'#fff',
    },  
    service:{
        alignItems:'center',
        marginHorizontal:10
    },
    selectionArea:{
        marginVertical:25,
        flexDirection:'row',
        justifyContent:'center'
    },
    selectService:{
        backgroundColor:'#fff',
        width:65,
        height:65,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'#676767',
        shadowRadius:5,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity:0.2,
    },
    serviceTitle:{
        marginTop:10,
        color:'#fff',
        fontSize:12,
        fontWeight:'500'
    },
    searchBox:{
        width:'100%',
        height:50,
        backgroundColor:'#fff',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20,
        marginTop:15,
        shadowColor:'#676767',
        shadowRadius:5,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity:0.2,
    },
    
    // testButtons:{
    //     backgroundColor:'#718BDB',
    //     paddingVertical:6,
    //     paddingHorizontal:12,
    //     borderRadius:15,
    //     marginTop:15,
    //     marginRight:15,
    //     flexDirection:'row',
    //     alignItems:'center',
    //     justifyContent:'space-between'
    // },
    // testName:{
    //     color:'#fff'
    // },
    map:{
        color:'#7B8FCE',
    },
    lab:{
        color:'#7B8FCE',
    },
    row:{
        marginTop:15,
        overflow:'scroll',
        flexDirection:'row',
        alignItems: 'stretch',
        flexWrap: 'wrap',
    }
})

export default Styles