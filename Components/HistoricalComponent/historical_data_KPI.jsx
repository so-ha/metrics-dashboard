import React from 'react';
// import data from '../../'


export default class HistoricalDataKPI extends React.Component {
    constructor(props){
        super(props)
        this.KPIs = this.KPIs.bind(this)
        this.state = {
            KPIarr: ["ADJUSTED CLOSE", "VOLUME",  "HIGH", "LOW"]
        }
    }

    

    KPIs() {
        let arr = this.props.kpi || {}
        // console.log("KPI: ",arr)
        let JsonArr = Object.entries(arr)
        // console.log("KPI: ",JsonArr)
        // let index = [];
        // index = JsonArr[0].map((keys) => {
        // return keys.slice(3).toUpperCase()
        // })
        // console.log("KPI: ", index)
        
        
        return JsonArr
    }

    openModal(evt, index) {
        // console.log("clicked by: ", index)
        // console.log("clicked by: ", evt)
        
    }

    render() {
        // console.log("props: ", this.props.kpi)
        let index = this.KPIs()
        // let index = 
        return (null
            // <div className="row" style={{"marginTop": "35px"}}>            
            //     {index.map((item, index) => <KPI item={item} index={index} openModal={this.openModal}/>)}
            // </div>
        )
    }
}

function KPI(props) {
    // console.log(props)
    return (
        <>
            <div className="col s12 m6 l3  modal-trigger" onClick={(e) => props.openModal(e, props.index)}>
                <div className="card horizontal hoverable">
                    <div className="card-stacked">
                        <p className="card-title m4">{props.item[0]}</p>
                        <div className="card-content">
                            <p>This item name is : {props.item[1]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}