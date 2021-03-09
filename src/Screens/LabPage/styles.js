import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        width:'95%',
        height:900,
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
        fontSize:15,
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
    map:{
        marginLeft:-15,
        width:'110%',
        height:250,
        marginTop:15,
        backgroundColor:'#fff',
    }
})

export default Styles