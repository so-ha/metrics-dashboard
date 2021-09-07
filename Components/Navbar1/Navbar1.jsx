import React, { Component } from 'react';
import ChartDashboard from '../Charts/ChartDashboard';
import CompanyOverview from '../CompanyOverview/CompanyOverview';
import HistoricalDataTable from '../HistoricalComponent/historical_data_table';
import '../../css/navbar1.css';

class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.state ={
            overview : true,
            dashboard : false
        }
    }
    render() {
        console.log('co: ', this.props.companyName)
        return (
            <div>
                <nav class="navbar1 bg-dark text-white">
                    <ul class="">
                        <li class="btn btn-success" onClick={(e) => this.setState({overview:true, dashboard:false})}>Overview</li>
                        <li class="btn btn-warning" onClick={(e) => this.setState({dashboard:true, overview:false})}>Dashboard</li>
                        <li class="btn btn-secondary" onClick={(e) => this.setState({overview:false, dashboard:false})}>Table</li>
                    </ul>
                    {this.state.overview && !this.state.dashboard && <CompanyOverview companyName={this.props.companyName} targetId={this.props.targetId}/>}
                    {!this.state.overview && this.state.dashboard && <ChartDashboard companyName={this.props.companyName} targetId={this.props.targetId}/>}
                    {!this.state.overview && !this.state.dashboard && <HistoricalDataTable companyName={this.props.companyName} targetId={this.props.targetId}/>}
                </nav>
            </div>
        );
    }
}

export default Navbar1;