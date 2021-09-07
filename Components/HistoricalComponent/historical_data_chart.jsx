import React from 'react';
import CanvasJSReact from '../../js/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints =[];
export default class HistoricalDataChart extends React.Component {
    constructor(props){
        super(props)
    }

	render() {
		let dateArray = [];
		let dates = Object.keys(this.props.data)
		dateArray = dates.map((d) => {
			d = d.split("-");
			let newDate = new Date(d[0], d[1] - 1, d[2]);
			return newDate.getTime();
		})
		let valuesArray = [];
		let values = Object.values(this.props.data);
		valuesArray = values.map((v) => {
			return Object.values(v).slice(0,4);
		})
		for(let i=0; i<dates.length;i++) {
			let temp1 = Object.values(valuesArray[i])
			 let temp2 = temp1.map((t) =>{
				 return parseInt(t);
			 })
			dataPoints.push({
				x : dateArray[i],
				y :temp2 
			})
		}
		const options = {
			exportEnabled: true,
			title: {
				text: "Company Stock Price", 
			// fontColor: "#1266f1",
			fontSize: 30,
			padding: 10,
			margin: 15,
			backgroundColor: "rgba(255, 169, 0, 0.16)",
			borderThickness: 1,
			cornerRadius: 5,
			fontWeight: "normal",
			fontFamily: "tahoma",
			},
			axisX: {
				valueFormatString: "D MMM YYYY"
			},
			axisY: {
				title: "Price",
				prefix: "₹",
			},
			data: [{
				type: "candlestick",
				name: "Company",
				color: "rgba(255, 169, 0, 0.5)",
				showInLegend: true,
				yValueFormatString: "₹##0.00",
				xValueType: "dateTime",
				dataPoints: dataPoints
			}]
		}
		return (
		<div class="container">
			{dataPoints.length>0 &&
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
	}
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}