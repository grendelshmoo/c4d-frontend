import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getStats, getGraph1, getGraph2} from '../actions/dashboard'
import moment from 'moment'
import {BarChart, AreaChart} from 'react-easy-chart';
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
  this.props.getGraph1()
  this.props.getGraph2()
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
          <AreaChart
              xType={'text'}
              // yType={''}
              // xDomainRange={[0, 4]}
              yDomainRange={[0, 4]}
              axes
              grid
              verticalGrid
              areaColors={['purple']}
              axisLabels={{x: 'Date', y: 'Records'}}
              interpolate={'cardinal'}
              width={850}
              height={350}
              data={[this.props.recordsByDate]}
            />
            <h5> Records by Municipality </h5>
            <BarChart
              axisLabels={{x: 'Municipality', y: 'Records'}}
              xType={'text'}
            
              grid
              axes
              height={350}
              width={850}
              colorBars
              barWidth={40}
              data={this.props.recordsByMuni}
            />



        </div>
      </div>
    </div>
  </div>
  )
  }
}
const mapStateToProps = ({dashboard}) => ({stats: dashboard.statsResults, recordsByDate: dashboard.recordsByDate, recordsByMuni: dashboard.recordsByMuni})
const mapDispatchToProps = (dispatch) => bindActionCreators({getStats, getGraph1, getGraph2}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
