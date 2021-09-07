import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import {macd} from '../../static/macd';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let macdData = macd[0]["Technical Analysis: MACD"]
let macd1 = Object.entries(macdData)

class KPIChart2 extends Component {
    constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
		this.computeData = this.computeData.bind(this);
		this.state = {dataPoints2:'', dataPoints3:'', dataPoints4:''}
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	computeData() {
		let dt1=[], dt2=[],dt3=[],dt4=[];
		for(let i=0;i<macd1.length;i++) {
			dt2.push({
				x:new Date(macd1[i][0]),
				y:Number(macd1[i][1]["MACD_Hist"])});
			dt3.push({
				x:new Date(macd1[i][0]),
				y:Number(macd1[i][1]["MACD"])});
			dt4.push({
				x:new Date(macd1[i][0]),
				y:Number(macd1[i][1]["MACD_Signal"])})
		}
		this.setState({
			dataPoints2:dt2,
			dataPoints3 : dt3,
			dataPoints4: dt4
		})
	}
	componentDidMount() {
		this.computeData();
	}
    render() {
        const options = {
            theme:"dark2",
			// animationEnabled: true,
			colorSet: "colorSet2",
			title: {
				text: "MACD Overview",
                fontSize:"20"
			},
			axisX: {
				valueFormatString: "DD-MM-YYYY"
			},
			axisY: {
				prefix: "",
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries,
				verticalAlign: "top"
			},
			data: [{
				type: "column",
				name: "MACD-Histogram",
				showInLegend: true,
				xValueFormatString: "MMMM YYYY",
				yValueFormatString: "#,##0.0000",
				dataPoints: this.state.dataPoints2
			},{
				type: "line",
				name: "MACD",
				showInLegend: true,
				yValueFormatString: "#,##0.0000",
				dataPoints: this.state.dataPoints3
			},{
				type: "line",
				name: "MACD-Signal",
				showInLegend: true,
				yValueFormatString: "#,##0.0000",
				dataPoints: this.state.dataPoints4
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
    }
}

export default KPIChart2;