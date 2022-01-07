import React, { useState } from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LazerPay } from 'lazerpay-react-native';

export default function App() {
  const [openSDK, setopenSDK] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Lazerpay Demo</Text>
      <View>
        <LazerPay
          {...{
            publicKey:
              'pk_live_0N24k7lsrr7NGfrDQpIjPGy9z61LkXjUqxX3r99XblXHemwMht',
            customer_fullname: 'Njoku Emmanuel',
            customer_email: 'kalunjoku123@gmail.com',
            currency: 'USD',
            amount: 10,
            onSuccess: (data) => {
              console.log(data, 'success data');
            },

            onError: (data) => {
              console.error(data);
            },
            onClose: () => setopenSDK(false),
            openSDK,
          }}
        />
      </View>
      <TouchableOpacity onPress={() => setopenSDK(true)}>
        <Text> Initiate Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
