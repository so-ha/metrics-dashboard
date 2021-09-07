import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import {rsi} from '../../static/rsi';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints =[];
let rsiData = rsi[0]["Technical Analysis: RSI"];

class KPIChart1 extends Component {

    componentDidMount(){
        let entries = Object.entries(rsiData);
        for (var i = 0; i < entries.length; i++) {
            dataPoints.push({
                x: new Date(entries[i][0]),
                y: Number(entries[i][1]["RSI"])
            });
        }
		this.chart.render();
	}
    render() {	
		const options = {
			theme: "dark2",
			title: {
				text: "RSI",
                fontSize:"20"
			},
			axisY: {
				title: "RSI Value",
				prefix: ""
			},
			data: [{
				type: "line",
				color: "rgba(150,255, 75)",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "00.0000",
				dataPoints: dataPoints
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref}
			/>
		</div>
		);
	}
}

export default KPIChart1;
