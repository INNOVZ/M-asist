import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        width:'95%',
        marginLeft:'2.5%',
    },
    headerContainer:{
        flexDirection:'column',
        height:65,
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
    },
    searchBox:{
        flex:0.9,
        height:50,
        backgroundColor:'#fff',
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        paddingLeft:20,
        paddingRight:20,
        marginTop:15,
        shadowColor:'#676767',
        shadowRadius:5,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity:0.2,
        flex:1
    },
    map:{
        color:'#7B8FCE',
        flex:1,
    },
    icon:{
        marginTop:15,
        marginRight:15,
        // height:50,
        // alignItems:'center',
        // justifyContent:'center',
        // backgroundColor:'#fff'
    },
})
export default Styles