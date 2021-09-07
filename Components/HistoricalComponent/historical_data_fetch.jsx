import React from 'react';
import { companySymbols, apikey, demoData, demoDataM, demoDataY, kpiChart1} from '../common';
import {daily_data} from '../../static/daily_data';
import {monthly_data} from '../../static/monthly_data';
import {yearly_data} from '../../static/yearly_data';

import '../../css/header.css';
export default class HistoricalDataFetch extends React.Component {
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this)
        this.handleActive = this.handleActive.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.companySelected = this.companySelected.bind(this)
        this.state = {
            isLoading: false
        }
    }

    async fetchData(event, compName = 'IndiaMART', id=0) {
        console.log("Cama: ", compName )
        // let companyName = companySymbols[compName]
        // const respJsonData = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${companyName}&outputsize=full&apikey=${apikey}`)
        // const respJsonKPI = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${compName}&apikey=DIEVPM711FQ1O9HE`)
        // const data = await respJsonData.json()
        // const kpis = await respJsonKPI.json()
        // console.log("KPI API: ", respJsonKPI)
        // console.log("KPI API JSON: ", kpis)
        // this.props.retrieveData(demoData, kpis)
        // this.props.retrieveData(data,kpis)
        console.log("Data: ", daily_data.length, monthly_data, yearly_data)
        // this.props.retrieveData(daily_data, kpiChart1, monthly_data, yearly_data, compName)
        this.props.retrieveCompName(compName, id)
    }

    handleChange(e) {
        console.log(e);
        this.fetchData(e, e.target.value, e.target.selectedIndex-1);
    }

    handleActive(id) {
        for(var i = 1; i < 5; i++){
            document.getElementById(i).classList.remove("active")
        }
        document.getElementById(id).classList.add("active")
    }

    companySelected() {
        console.log("com: ", this.props.companyName)
        document.querySelector('#slct').value = this.props.companyName ? this.props.companyName : ''
    }

    componentDidMount() {
        {this.props.companyName && this.companySelected()}
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark fixed-top header">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <h3 className="header-title">Metrics Dashboard</h3>
                        </a>
                        <div className="select">
                            <select name="slct" id="slct" onChange={(e)=>this.handleChange(e)}>
                                <option selected disabled>Choose a tech stock</option>
                                <option value="HCL" id="0">HCL</option>
                                <option value="IndiaMART" id="1">IndiaMART</option>
                                <option value="Wipro" id="2">Wipro</option>
                                <option value="TCS" id="3">TCS</option>
                                <option value="Tech Mahindra" id="4">Tech Mahindra</option>
                                <option value="Infosys" id="5">Infosys</option>
                                <option value="IBM" id="6">IBM</option>
                            </select>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}