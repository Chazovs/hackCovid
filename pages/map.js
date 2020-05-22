import React from 'react';
import MapView from "react-native-maps";
import {Dimensions, StyleSheet, View} from 'react-native';



export default function Map() {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        mapStyle: {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        },
    });

    return(

            <MapView style={styles.mapStyle}
                     initialRegion={{
                         latitude:       47.22796199,
                         longitude:      39.69806671,
                         latitudeDelta:  0.0922,
                         longitudeDelta: 0.0421,
                     }}
            />

    )
}

