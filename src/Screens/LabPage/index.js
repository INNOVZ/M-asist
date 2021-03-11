import React, {useState} from 'react'
import { View, Text, ScrollView,SafeAreaView, Image, Button,Pressable } from 'react-native'
import TopMenu from '../../Navs/TopMenu'
import Styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import TestSelect from "../../Components/TestSelect";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import GoogleMap from '../../Components/GoogleMap'
 
const LabPage = () => {

    const [pickerMode, setPickerMode] = useState(null);

  const showDatePicker = () => {
    setPickerMode("date");
  };

  const showTimePicker = () => {
    setPickerMode("time");
  };

  const hidePicker = () => {
    setPickerMode(null);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked:", date);
    hidePicker();
  };

    return (
        <SafeAreaView>
            <TopMenu/>
            <ScrollView style={Styles.scrollArea}>
                <Image source={require('../../../assets/images/synlabim.png')}></Image>
                <View style={Styles.container}>
                    <View style={Styles.addressBox}>
                        <View style={Styles.address}>
                        <Fontisto style={Styles.icon} name="map-marker-alt"  size={18} color={'#7B8FCE'}/>
                            <Text style={Styles.info}> Via V. Orsini 18, 20157</Text>
                        </View>
                        <View style={Styles.address}>
                            <MaterialIcons style={Styles.icon} name="phone"  size={18} color={'#7B8FCE'}/>
                            <Text style={Styles.info}>3391282519</Text>
                        </View>
                    </View>
                    <View style={Styles.addressBox}>
                        <Text style={Styles.availableTests}>Esame Disponibile</Text>
                        <View style={Styles.row}>
                            <TestSelect testName= "Ecografia"/>
                            <TestSelect testName= "Torace"/>
                            <TestSelect testName= "Scan"/>
                            <TestSelect testName= "Essame Sangue"/>
                            <TestSelect testName= "Torace"/>
                        </View>
                    </View>
                    <View style={Styles.pickerBox}>
                        <View style={Styles.pickDateTime}>
                            <Text style={Styles.dateTitle}>Data:</Text>
                            <Pressable onPress={showDatePicker}>
                                <Text>Pick</Text>
                            </Pressable>
                        </View>
                        <View style={Styles.pickDateTime}>
                            <Text style={Styles.dateTitle}>Orario:</Text>
                            <Pressable onPress={showDatePicker}>
                                <Text>Date</Text>
                            </Pressable>
                        </View>
                        
                        
                        {/* <Button title="Select Time" onPress={showTimePicker} /> */}
                        <DateTimePickerModal
                            isVisible={pickerMode !== null}
                            mode={pickerMode}
                            onConfirm={handleConfirm}
                            onCancel={hidePicker}
                        />
                    </View>
                    <View style={Styles.map}>
                        <GoogleMap/>
                    </View>
                </View>
               
            </ScrollView>
        </SafeAreaView>
    )
}

export default LabPage
