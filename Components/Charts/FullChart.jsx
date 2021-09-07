/* FullChart.js */
import React, { Component } from "react";
import {daily_data} from '../../static/daily_data';
import CanvasJSReact from './canvasjs.stock.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;
// let chartData = daily_data[0]["Time Series (Daily)"];
 
 
class FullChart extends Component {
  constructor(props) {
    super(props);
    this.state = { dataPoints1: [], dataPoints2: [], dataPoints3: [], isLoaded: false, companyName:'Company', chartData: '', data: ''};
    this.computeData = this.computeData.bind(this);
    this.dynamicImport = this.dynamicImport.bind(this)
  }
 
  computeData() {
      if(this.state.chartData) {
        //   let keys = Object.keys(this.props.data);
        //   let values = Object.values(this.props.data);
        let keys = Object.keys(this.state.chartData);
        let values = Object.values(this.state.chartData);
          let values1 = values.map((item) => Object.entries(item));
          var dps1 = [], dps2 = [], dps3 = [];
          for (var i = 0; i < keys.length; i++) {
            dps1.push({
              x: new Date(keys[i]),
              y: [
                Number(values1[i][0][1]),
                Number(values1[i][1][1]),
                Number(values1[i][2][1]),
                Number(values1[i][3][1])
              ]
            });
            dps2.push({x: new Date(keys[i]), y: Number(values1[i][5][1])});
            dps3.push({x: new Date(keys[i]), y: Number(values1[i][3][1])});
          }
          this.setState({
            isLoaded: true,
            dataPoints1: dps1,
            dataPoints2: dps2,
            dataPoints3: dps3
          });
      }
  }

  componentDidMount() {
    // console.log("didMount Full Chart Data", this.props.data)
    this.dynamicImport(this.props.companyName)
  }

  componentDidUpdate() {
    if(window.cName1 !== this.props.companyName){
      this.dynamicImport(this.props.companyName)
    }
  }

  dynamicImport(cName) {
    window.cName1 = cName
    import(`../../static/${cName}_data.js`).then(
      module => this.setState({data: module.Data})
    ).then(
      () => this.setState({chartData: this.state.data[0]["Monthly Adjusted Time Series"]})
      ).then(
        () => this.computeData()
      )
    this.setState({companyName:cName})
  }
 
  render() {
    console.log("company name", this.state.companyName)
    const options = {
      theme: "dark2",
    // backgroundColor:"#212529",
      title:{
        text: this.state.companyName+ " StockChart with Date-Time Axis",
        fontColor:"#E6E3E3",
        fontWeight:"bold",
        fontSize:"30",
        fontFamily:"Calibri"
      },
      subtitles: [{
        text: "Price-Volume Trend",
        fontColor:"#E6E3E3",
        fontWeight:"bold",
        fontSize:"15",
        fontFamily:"Calibri"
      }],
      charts: [{
        axisX: {
          lineThickness: 5,
          tickLength: 0,
          labelFormatter: function(e) {
            return "";
          },
          crosshair: {
            enabled: true,
            snapToDataPoint: true,
            labelFormatter: function(e) {
              return "";
            }
          }
        },
        axisY: {
          title: "Price",
          prefix: "₹",
          tickLength: 0,
          titleFontColor:"#E6E3E3",
        },
        toolTip: {
          shared: true
        },
        data: [{
          name: "Price (in INR)",
          yValueFormatString: "₹#,###.##",
          type: "candlestick",
          dataPoints : this.state.dataPoints1
        }]
      },{
        height: 100,
        axisX: {
          crosshair: {
            enabled: true,
            snapToDataPoint: true
          }
        },
        axisY: {
          title: "Volume",
          prefix: "₹",
          tickLength: 0,
          // titleFontColor:"#E6E3E3"
        },
        toolTip: {
          shared: true
        },
        data: [{
          name: "Volume",
          yValueFormatString: "₹#,###.##",
          type: "column",
          dataPoints : this.state.dataPoints2
        }]
      }],
      navigator: {
        data: [{
          dataPoints: this.state.dataPoints3
        }],
        slider: {
          minimum: new Date("2018-05-01"),
          maximum: new Date("2018-07-01")
        }
      }
    };
    const containerProps = {
      width: "100%",
      height: "450px",
      margin: "auto"
    };
    // console.log("Render Full Chart Data", this.props.data)
    return (
      <div class="bg-dark pt-4 pb-4"> 
        <div class="container">
          {
            this.state.isLoaded && 
            <CanvasJSStockChart containerProps={containerProps} options = {options}
              /* onRef = {ref => this.chart = ref} */
            />
          }
        </div>
      </div>
    );
  }
}
export default FullChart;