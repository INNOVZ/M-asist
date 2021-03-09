import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    mapContainer:{
        width:'100%',
        height:'100%',
    },
    labMarker:{
        backgroundColor:'#676767',
        paddingVertical:8,
        paddingHorizontal:15,
        borderRadius:15,
        flexDirection:'row',
    },
    icon:{
        marginRight:15,
    },
    labName:{
        color:'#fff',
        fontWeight:'600',
        fontSize:14,
    }
})

export default Styles