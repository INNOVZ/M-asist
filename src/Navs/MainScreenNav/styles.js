import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container:{
        // backgroundColor:'#7B8FCE',
        width:'100%',
        paddingTop:15,
        height:85,
        flexDirection:'row',
        padding:0,
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'#6f8add'
    },
    box:{
        marginLeft:15,
        height:60,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        shadowColor:'#676767',
        shadowRadius:5,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity:0.2,
    },
    shadow:{
        shadowColor:'#676767',
        shadowRadius:5,
        shadowRadius: 5,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity:0.2,
    },
    icon:{
        marginRight:15,
    },
    headingBox:{
        backgroundColor:'#fff',
        paddingVertical:10,
        paddingHorizontal:25,
        borderRadius:10,
    },
    title:{
        color:'#6f8add',
        fontSize:12,
        fontWeight:'600',
    }
})

export default Styles
