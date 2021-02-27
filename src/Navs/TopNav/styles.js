import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        
        // backgroundColor:'#7B8FCE',
        width:'95%',
        marginLeft:'2%',
        marginTop:10,
        height:60,
        flexDirection:'row',
        padding:0,
        alignItems:'center',
        justifyContent:'space-between',
    },
    addressBox:{
        height:60,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderRadius:10,
    },
    icon:{
        marginRight:10,
    },
    address:{
        justifyContent:'center',
        alignItems:'center',
        color:'#7B8FCE',
        fontWeight:'600',
        marginLeft:10,
    },
    headingBox:{
        backgroundColor:'#7B8FCE',
        paddingVertical:10,
        paddingHorizontal:25,
        borderRadius:10,
    },
    title:{
        color:'#fff',
        fontSize:12,
        fontWeight:'600',
    }
})

export default Styles