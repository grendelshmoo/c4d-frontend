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
    return (<div className="container-flex">
      {/* Stats  */}
      <div className="row">
        <div className="col-6 m-3 p-3">
          <h4> Record Stats </h4>
          <ul className="list-group d-flex list-unstyled m-3">
            <li className="list-group-item d-flex justify-content-between align-items-center">Records: <span> {this.props.stats.record_count}</span></li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Most Recent Record: <span> {moment(this.props.stats.max_date).format("MM/DD/YY")}</span></li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Earliest Record: <span> {moment(this.props.stats.min_date).format("MM/DD/YY")}</span></li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Contacts: <span>{this.props.stats.contacts_count}</span></li>
          </ul>
        </div>
      </div>

      {/* Graphs */}
      <div className="row">
        <div className="col">
          <h4> Records by Date </h4>
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
            <h4> Records by Municipality </h4>
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


  )
  }
}
const mapStateToProps = ({dashboard}) => ({stats: dashboard.statsResults})
const mapDispatchToProps = (dispatch) => bindActionCreators({getStats}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
