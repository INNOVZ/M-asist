import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    headerContainer:{
        width:'95%',
        marginHorizontal:'2.5%',
        marginVertical:15,
    },
    searchBox:{
        padding:12,
        width:'100%',
        color:'#7B8FCE',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        borderRadius:12,
        borderColor:'#7B8FCE',
        // borderWidth:0.25,
        shadowColor:'#676767',
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:0.2,
    },
    input:{
        color:'#7B8FCE',
    },
    clear:{
        width:20,
        height:20,
    }
    
})
export default Styles