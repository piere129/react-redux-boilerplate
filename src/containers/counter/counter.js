import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increaseAction} from '../../actions/actions';
import './counter.css'
import {Table} from 'react-bootstrap'

 class CounterComponent extends Component {
    render() {
        const { value,increaseAction } = this.props;
        return (
            <div>
            <p id="test">Value is:</p>
            <p> {value}</p>
            <p> Increase value with 1:</p>
            <button onClick={increaseAction}>Increase</button>
            <hr/>

              <Table striped bordered condensed hover > 
              <thead>
              <tr> 
                <th> Id: </th>
                <th>  String: </th>
                <th>  Number: </th>
                <th>  Email:   <button>sort by email</button> </th>
                <th> Delete: </th>
                <th> View: </th>
              </tr>
              </thead>
              </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    value: state.counterReducer.count
  };
};

function mapDispatchToProps() {
  return {
    increaseAction
  };
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps()
)(CounterComponent);

export default Counter;