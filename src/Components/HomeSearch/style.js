import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
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
    searchHeader:{
        color:'#7B8FCE',
        fontSize:22,
        fontWeight:'600',
        marginTop:50,
        fontFamily:'Poppins'
    },
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