import React from 'react';
import { View, StyleSheet } from 'react-native';

// pull in the ScreenName component from ScreenName.js
import ScreenName from '../components/ScreenName.js'

export default class Portfolio extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ScreenName name={'Portfolio'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});