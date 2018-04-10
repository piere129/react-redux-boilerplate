import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class ParentComponent extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps() {
    return {
    };
}

const Parent = connect(
    //state setten voor dispatch, moet hier niet expliciet gebeuren maar moet er wel bijstaan
    //aangezien mapdispatch 2e argument moet zijn!
    mapStateToProps,
    mapDispatchToProps()
)(ParentComponent);

export default Parent;
