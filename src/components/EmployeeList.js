import _ from 'lodash';
import React, {Component} from 'react';
import {ImageBackground, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions/EmployeeActions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }
  renderItem = (item) => {
    // console.log(item, 'render item');
    return <ListItem employee={item.item} />;
  };

  render() {
    return (
      <ImageBackground
        imageStyle={{resizeMode: 'cover'}}
        style={styles.backgroundImage}
        source={require('../../images/windows.png')}>
        <FlatList
          data={this.props.employees}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.uid}
        />
      </ImageBackground>
    );
  }
}
const styles = {
  viewStyle: {
    backgroundColor: '#c4bbc1',
    paddingTop: 51,
    flex: 1,
  },
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
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });
  // console.log(employees);
  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
