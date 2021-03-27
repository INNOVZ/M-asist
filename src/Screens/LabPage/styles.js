import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        width:'95%',
        height:800,
        marginLeft:'2.5%',
        // marginTop:15,
        shadowColor:'#676767',
        shadowRadius: 2,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:0.1,
    },
    scrollArea:{
        backgroundColor:'#E6E8F0',
    },
    addressBox:{
        marginTop:15,
        backgroundColor:'rgba(255, 255, 255, 1)',
        // height:275,
        borderRadius:7,
        padding:20,
        shadowColor:'#676767',
        shadowRadius:2,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 0.1 },
        shadowOpacity:0.1,
    },
    address:{
        flexDirection:'row',
        marginTop:7.5,
        marginBottom:7.5
    },
    icon:{
        marginRight:15
    },
    info:{
        fontSize:12,
        color:'#515151',
        fontWeight:'500'
    },
    tests:{
        marginTop:30,
    },
    availableTests:{
        fontSize:12,
        fontWeight:'700',
        color:'#676767'
    },
    row:{
        marginTop:0,
        overflow:'scroll',
        flexDirection:'row',
        alignItems: 'stretch',
        flexWrap: 'wrap',
    },
    pickerBox:{
        marginTop:15,
        backgroundColor:'rgba(255, 255, 255, 1)',
        // height:275,
        borderRadius:7,
        // flexDirection:'row',
        padding:20,
        shadowColor:'#676767',
        shadowRadius:2,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 0.1 },
        shadowOpacity:0.1,
    },
    pickDateTime:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
    },
    dateTitle:{
        flex:1,
        fontSize:12,
        fontWeight:'700',
        color:'#676767'
    },
    testColor:{
        color:'#fff'
    },
    map:{
        marginLeft:-15,
        width:'110%',
        height:250,
        marginTop:15,
        backgroundColor:'#fff',
    },
    bookTest: {
        height:60,
        backgroundColor:'#7B8FCE',
        width:'100%',
        position:'absolute',
        right: 0,
        bottom:70,
        alignItems:'center',
        justifyContent:'center'
    },
    book:{
        color:'#fff',
        fontSize:18,
        fontWeight:'700',
    }
})

export default Styles