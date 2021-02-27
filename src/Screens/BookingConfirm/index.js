import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import BookingConfirmCard from "../../Components/BookingConfirmCard";
import Styles from "./styles";

const BookingConfirm = () => {
    return (
        <SafeAreaView>
          <BookingConfirmCard/>  
        </SafeAreaView>
    )
}

export default BookingConfirm
