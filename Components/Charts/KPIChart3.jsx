import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import {sma} from '../../static/sma';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints =[];
let smaData = sma[0]["Technical Analysis: SMA"];

class KPIChart3 extends Component {

    componentDidMount(){
		let entries = Object.entries(smaData);
        for (var i = 0; i < entries.length; i++) {
            dataPoints.push({
                x: new Date(entries[i][0]),
                y: Number(entries[i][1]["SMA"])
            });
        }
		this.chart.render();
	}
    render() {	
		const options = {
			theme: "dark2",
			title: {
				text: "SMA",
                fontSize:"20"
			},
			axisY: {
				title: "SMA",
				prefix: ""
			},
			data: [{
				type: "line",
				color: "rgba(255, 169, 0)",
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

export default KPIChart3;
