import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import {ema} from '../../static/ema';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints =[];
let emaData = ema[0]["Technical Analysis: EMA"];


class KPIChart4 extends Component {

    componentDidMount(){
		let entries = Object.entries(emaData);
        for (var i = 0; i < entries.length; i++) {
            dataPoints.push({
                x: new Date(entries[i][0]),
                y: Number(entries[i][1]["EMA"])
            });
        }
		this.chart.render();
	}
    render() {	
		const options = {
			theme: "dark2",
			title: {
				text: "EMA",
                fontSize:"20"
			},
			axisY: {
				title: "EMA",
				prefix: ""
			},
			data: [{
				type: "line",
                color: "rgba(255, 75, 10)",
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

export default KPIChart4;
