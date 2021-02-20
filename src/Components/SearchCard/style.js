import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        width:'95%',
        backgroundColor:'rgba(255, 255, 255, 1)',
        height:250,
        marginLeft:'2.5%',
        marginTop:15,
        borderRadius:15,
        padding:20,
        shadowColor:'#676767',
        shadowRadius:5,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity:0.2,
    },
    topArea:{
        flexDirection:'row',
        height:50,
        alignItems:'center',
        justifyContent:'space-between',
    },
    timing:{
        fontWeight:"600",
        color:'#676767'
    },
    line:{
        height:5,
        width:100,
    },
    bottomArea:{
        flexDirection:'row',
        height:100,
        alignItems:'center',
        justifyContent:'space-between',
    },
    name:{
        fontSize:18,
        color:'#7B8FCE',
        fontWeight:'700',
    },
    image:{
        width:50,
        height:50,
    },
    icon:{
        marginRight:10,
    },
    address:{
        color:'#7B8FCE',
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