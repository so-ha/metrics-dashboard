import React from 'react';
import CanvasJSReact from '../../js/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = [];
class HistoricalDataKpiChart extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
		// console.log("kpi chart",this.props.data)
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Relative Strength Index"
			},
			axisY: {
				title: "RSI",
				suffix: "%"
			},
			axisX: {
				title: "Week of Year",
				prefix: "W",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: dataPoints
			}]
		}
		return (
		<div>
			{dataPoints.length>0 ?
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>:''}
		</div>
		);
	}
}

export default HistoricalDataKpiChart;