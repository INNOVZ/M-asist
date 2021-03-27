import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'95%',
        marginHorizontal:'2.5%'
    },
    searchButton:{
        height:60,
        backgroundColor:'#7B8FCE',
        width:'100%',
        position:'absolute',
        right: 0,
        bottom:0,
        alignItems:'center',
        justifyContent:'center',
    },
    searchText:{
        fontSize:16,
        fontWeight:'600',
        color:'#fff',
    }
})

export default Styles