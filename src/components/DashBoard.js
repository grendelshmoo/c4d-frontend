import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getStats} from '../actions/dashboard'
import moment from 'moment'
import {LineChart, BarChart} from 'react-easy-chart';
// import {Line} from 'react-chartjs'

// var chartData = [{x: 10, y:20}, {x:15, y:3}, {x:30, y:7}]
// var chartData = {}
// var chartOptions = {
//   label: "Test",
//   xAxisID: "Date",
//   yAxisID: "Time",
//   showLine: true
// }


class DashBoard extends Component {
// constructor(props){
//   super(props)
//   this.state = {statsListing: {}}
// }
componentDidMount = () => {
  this.props.getStats()
}
  render() {
    return (
      <div>
      <div className="container-flex">
      {/* Stats  */}
      <div className="row">
        <div className="col-6 m-3 p-3">
          <h5> Record Stats </h5>
          <small>
          <ul className="list-group d-flex list-unstyled m-3">
            <li className="list-group-item d-flex justify-content-between align-items-center">Records: <span> {this.props.stats.record_count}</span></li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Most Recent Record: <span> {moment(this.props.stats.max_date).format("MM/DD/YY")}</span></li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Earliest Record: <span> {moment(this.props.stats.min_date).format("MM/DD/YY")}</span></li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Properties: <span>{this.props.stats.properties_count}</span></li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Contacts: <span>{this.props.stats.contacts_count}</span></li>
          </ul>
        </small>
        </div>
        {/* Quick Links  */}
        <div className="col-5 m-3 p-3">
          <h5> Quick Links </h5>
          <ul className="list-group d-flex list-unstyled m-3">
            <a role="button" href="/records/add" className="btn btn-sm btn-primary btn-block text-light">Add Record</a>
            <a role="button" href="/properties/add" className="btn btn-sm btn-secondary btn-block text-light">Add Property</a>
            <a role="button" href="/contacts/add" className="btn btn-sm btn-warning btn-block text-light">Add Contact</a>

          </ul>

        </div>
      </div>
    </div>

    <div className="container">
      {/* Graphs */}
      <div className="row justify-content-md-center">
        <div className="col col-md-auto">

          <h5> Records by Date </h5>
          <LineChart
              xType={'time'}
              axes
              grid
              verticalGrid
              interpolate={'cardinal'}
              width={850}
              height={350}
              data={[
                [
                  { x: '1-Jan-15', y: 20 },
                  { x: '1-Feb-15', y: 10 },
                  { x: '1-Mar-15', y: 33 },
                  { x: '1-Apr-15', y: 45 },
                  { x: '1-May-15', y: 15 }
                ], [
                  { x: '1-Jan-15', y: 10 },
                  { x: '1-Feb-15', y: 15 },
                  { x: '1-Mar-15', y: 13 },
                  { x: '1-Apr-15', y: 15 },
                  { x: '1-May-15', y: 10 }
                ]
              ]}
            />
            <h5> Records by Municipality </h5>
            <BarChart
              axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
              axes
              height={350}
              width={850}
              colorBars
              barWidth={40}
              xType={'time'}
              data={[
                { x: '1-Jan-15', y: 20 },
                { x: '2-Jan-15', y: 10 },
                { x: '3-Jan-15', y: 33 }
              ]}
            />



        </div>
      </div>
    </div>
  </div>
  )
  }
}
const mapStateToProps = ({dashboard}) => ({stats: dashboard.statsResults})
const mapDispatchToProps = (dispatch) => bindActionCreators({getStats}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
