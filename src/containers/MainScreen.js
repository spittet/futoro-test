// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, StyleSheet, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

const MainScreen = ({ navigation, dispatch }: any) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      This is the main screen
    </Text>
    <Button
      onPress={() =>
        dispatch(NavigationActions.navigate({ routeName: 'Record' }))}
      title="Go to record screen"
    />
  </View>
);

MainScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(MainScreen);