import React, { useState, useEffect } from 'react';

import axios from 'axios'
import randomColor from './randomColor'

function Rona(props) {
    const {country, cases, todayCases, deaths, todayDeaths, recovered, active, critical} = props.data
    function numberWithCommas(x, item) {
        if(x !== null){
            const numString = x.toString()
            return numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return "Unavailable"
    }
    
    return(
        <div className="ronaContainer">
            <div className="countryContainer">
                <h2 className="country">{country}</h2>
            </div>
            
            <div className="caseContainer">
                <h2><i className="fas fa-vial"></i>: {numberWithCommas(cases)}</h2>
                <p><i className="far fa-calendar-plus"></i>: {todayCases}</p>
            </div>
            
            <div className="deathContainer">
                <h2><i className="fas fa-skull-crossbones"></i>: {numberWithCommas(deaths, {country: country, case: "deaths"} )}</h2>
                <p><i className="far fa-calendar-plus"></i>: {todayDeaths}</p>
            </div>
            
            <div className="miscContainer">
                <p style={{background: randomColor()}}><i className="far fa-heart"></i>: {numberWithCommas(recovered)}</p>
                <p style={{background: randomColor()}}>active: {numberWithCommas(active, {country: country, case: "active"} )}</p>
                <p style={{background: randomColor()}}><i className="far fa-hospital"></i>: {numberWithCommas(critical, {country: country, case: "critical"} )}</p>
            </div>
            
        </div>
    )
}
export default Rona