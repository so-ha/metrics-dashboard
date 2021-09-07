import { fn } from 'jquery';
import React, {useState} from 'react';
import '../../css/company.css'
import {staticData} from '../../static/static_data';
import Card from './Card';

function retrieveCompanyData(i) {
    return staticData[i];
}

function constructTable(data) {
	let rows=[];
	if(data) {
		data.map((item) => {
			rows.push(
				<tr>
					<td>{item[0]}</td>
					<td>{item[1]}</td>
				</tr>
			)
		})
	}  
	return rows;
}

function CompanyOverview(props) {
    let result = retrieveCompanyData(Number(props.targetId));
    let entries = result ? Object.entries(result):''
	let rows = constructTable(entries);
	console.log("rows", rows)
    return (
        <div>
            <div class="company bg-dark">
            <h1 class="mb-3 overview">Overview</h1>
            {/* <div class="row row-cols-1 row-cols-md-6 g-3">
                {entries && entries.map((item)=> { 
                    return <Card key1={item[0]} value1={item[1]}/>
                })}
            </div> */}
			<table>
				<tbody class="tableOverview">
				{rows}
				</tbody>
			</table>
        </div>
        </div>
    );
}

export default CompanyOverview;