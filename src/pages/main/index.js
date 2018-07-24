import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PeopleActions } from '../../store/ducks/people';
import { Loading } from './styles'; 
import Card from '../../components/Card';

class Main extends PureComponent {

  static propTypes = {
    getPeople: PropTypes.func.isRequired,
    people: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({})),
      loadingInitial: PropTypes.bool,
    }).isRequired,
  }

  componentDidMount () {
    this.props.getPeople()
  }
  

  render() {
    return (
      <div className="container">
        {this.props.people.loadingInitial && (
          <Loading>
            <i className="fa fa-spinner fa-pulse"></i>
          </Loading>
        )}
        <div className="row mt-5">
          {this.props.people.data.map(person => (
            <Card 
              key={Math.random()}
              person={person}
            />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  people: state.people,
});

const mapDispatchToProps = dispatch => bindActionCreators(PeopleActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);