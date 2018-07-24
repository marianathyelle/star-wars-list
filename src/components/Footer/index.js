import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PeopleActions } from '../../store/ducks/people';
import { Loading, Button } from './styles';

class Footer extends Component {
  state = {
    page: 1,
  }

  static propTypes = {
    getMorePeople: PropTypes.func.isRequired,
    handleGetMorePeople: PropTypes.func,
    people: PropTypes.shape({
      hasPeopleToShow: PropTypes.bool,
      loading: PropTypes.bool,
    }).isRequired,
  }

  handleGetMorePeople = () => {
    this.setState({
      page: this.state.page + 1,
    }, () => {
      this.props.getMorePeople(this.state.page)
    })
  }

  render() {
    return (
      <Fragment>
        {this.props.people.hasPeopleToShow && (
          <div className="mb-5">
            {this.props.people.loading && (
              <Loading>
                <i className="fa fa-spinner fa-pulse"></i>
              </Loading>
            )}
            <div className="d-flex justify-content-center">
              <Button type="button" onClick={this.handleGetMorePeople}>Ver mais</Button>
            </div>
          </div>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  people: state.people,
});

const mapDispatchToProps = dispatch => bindActionCreators(PeopleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Footer);