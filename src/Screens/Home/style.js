import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        backgroundColor:'#E6E8F0',
    },
    headerArea:{
        flex:1,
        borderBottomEndRadius:50,
        borderBottomLeftRadius:15,
        justifyContent:'space-around',
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
        flexDirection:'row'
    },
    button:{
        opacity:0.7,
    },
    buttonUp:{
        opacity:1,
    },
    selectButtons:{
        backgroundColor:'#fff',
        paddingVertical:8,
        paddingHorizontal:15,
        borderRadius:12,
        marginTop:15,
        marginRight:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        shadowColor:'#676767',
        shadowRadius:5,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity:0.2,
    },

    testName:{
        color:'#6f8add'
    },
    icon:{
        marginRight:10,
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
    mapInput:{
        color:'#6f8add',
    },
    row:{
        marginTop:15,
        overflow:'scroll',
        flexDirection:'row',
        alignItems: 'stretch',
        flexWrap: 'wrap',
    },
    scrollArea:{
        flex:1,
        marginTop:-15,
        padding:'2.5%',
        borderTopStartRadius:15,
        borderTopRightRadius:15,
        backgroundColor:'#dae1ea',
    },
})

export default Styles