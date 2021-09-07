import React from 'react';
import HistoricalDataFetch from './historical_data_fetch';
import '../../css/historical.css';
import FullChart from '../Charts/FullChart';
import Navbar1 from '../Navbar1/Navbar1';

export default class HistoricalComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: '',
            kpi: '',
            kpiChart:'',
            dataM: '',
            dataY: '',
            companyName: '',
            targetId: ''
        }
        this.retrieveData = this.retrieveData.bind(this);
        this.retrieveCompName = this.retrieveCompName.bind(this);
    }

    retrieveData(data, kpiChart, dataM, dataY, cName) {
        this.setState({dataM: dataM[0]['Monthly Adjusted Time Series'], kpiChart:kpiChart["Technical Analysis: RSI"], data: data[0]["Time Series (Daily)"], dataY: dataY[0]["Yearly Adjusted Time Series"], cName: cName})
        }

    retrieveCompName(Cname, Tid) {
        this.setState({companyName: Cname, targetId: Tid})
    }
    
    render() {
        console.log("co: ", this.state.companyName, " : ", this.props.companyName)
        console.log("co: ", this.state.targetId, " : ", this.props.targetId)
        return (
            <>
                <div className="" style={{"background": "#fff", "marginTop": "5.05rem"}}>
                    <HistoricalDataFetch companyName={this.props.companyName} retrieveData={this.retrieveData} retrieveCompName={this.retrieveCompName} />
                    <Navbar1 companyName={this.state.companyName ? this.state.companyName : this.props.companyName} targetId={this.state.targetId ? this.state.targetId : this.props.targetId}/>
                </div>
                <FullChart data={this.state.data} companyName={this.state.companyName ? this.state.companyName : this.props.companyName} targetId={this.state.targetId ? this.state.targetId : this.props.targetId}/>
            </>
        )
    } 
}