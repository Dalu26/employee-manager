import React, {Component} from 'react';
import {ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions/index';
import {Card} from './common/Card';
import {CardSection} from './common/CardSection';
import {Button} from './common/Button';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const {name, phone, shift} = this.props;

    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }
  render() {
    return (
      <ImageBackground
        imageStyle={{resizeMode: 'cover'}}
        style={styles.backgroundImage}
        source={require('../../images/windows.png')}>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </ImageBackground>
    );
  }
}
const styles = {
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    opacity: 0.7,
  },
};
const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};
export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(
  EmployeeCreate,
);
