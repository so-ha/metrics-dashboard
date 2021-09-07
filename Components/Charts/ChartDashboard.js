import React, { Component } from 'react';
import KPIChart1 from './KPIChart1';
import KPIChart2 from './KPIChart2';
import KPIChart3 from './KPIChart3';
import KPIChart4 from './KPIChart4';
import '../../css/chart.css'

class ChartDashboard extends Component {
    render() {
        return (
            <div class="bg-dark ">
                <h1 class="mb-3 pt-2 text-center fs-3">Dashboard</h1>
                <div class="row row-cols-1 row-cols-md-2 pt-2 g-2 bg-dark container" id="dashboard">
                    <div class="col text-center">
                        <div class="card bg-dark border border-primary rounded-3">
                            <div class="card-body">
                                <h5 class="card-title text-white fst-italic text-decoration-underline">Simple Moving Average</h5>
                                <KPIChart3/>
                            </div>
                        </div>
                    </div>
                    <div class="col text-center">
                        <div class="card bg-dark border border-primary rounded-3">
                            <div class="card-body">
                                <h5 class="card-title text-white fst-italic text-decoration-underline">Exponential Moving Average</h5>
                                <KPIChart4/>
                            </div>
                        </div>
                    </div>
                    <div class="col text-center">
                        <div class="card bg-dark border border-primary rounded-3">
                            <div class="card-body">
                                <h5 class="card-title text-white fst-italic text-decoration-underline">Relative Strength Index</h5>
                                <KPIChart1/>
                            </div>
                        </div>
                    </div>
                    <div class="col text-center">
                        <div class="card bg-dark border border-primary rounded-3">
                            <div class="card-body">
                                <h5 class="card-title text-white fst-italic text-decoration-underline">Moving average convergence divergence</h5>
                                <KPIChart2/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChartDashboard;