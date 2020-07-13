import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions/index';
import {Card} from './common/Card';
import {CardSection} from './common/CardSection';
import {Input} from './common/Input';
import {Button} from './common/Button';
import {Spinner} from './common/Spinner';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  OnButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }
  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button onPress={this.OnButtonPress.bind(this)}>LOGIN</Button>;
  }
  render() {
    return (
      // <Card>
      <ImageBackground
        imageStyle={{resizeMode: 'cover'}}
        style={styles.backgroundImage}
        source={require('../../images/windows.png')}>
        <CardSection>
          <Input
            label="Email"
            placeholder="Type your Email"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            secureTextEntry
            placeholder="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>{this.renderButton()}</CardSection>
        {/* </Card> */}
      </ImageBackground>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'Center',
    color: 'red',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
};

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;
  return {
    email,
    password,
    error,
    loading,
  };
};
export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser,
})(LoginForm);
