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
    scrollArea:{
        marginTop:-15,
        padding:'2.5%',
        borderTopStartRadius:15,
        borderTopRightRadius:15,
        backgroundColor:'#E6E8F0',
        
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
    }
})

export default Styles