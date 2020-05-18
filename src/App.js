import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Rona from './Rona'
import randomColor from './randomColor'

function App() {
    const backupAPI = 'https://www.jsonblob.com/api/jsonBlob/a0c48bfb-6c8f-11ea-9610-1f0d48f4fcac'
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState([])   
    
    function handleFilter(name) {
        if(filter.length > 0 && filter[0].country === name){
            return
        }
        const filteredArray = data.filter(item => item.country === name)
        setFilter(filteredArray)
    }
    
    useEffect(()=>{
        setLoading(true)
        axios.get('https://coronavirus-19-api.herokuapp.com/countries')
            .then(res => {
                setData(res.data)
                setLoading(false)
                }
            )
    }, []);
    
    if(loading){
        return <h2>Loading...</h2>
    } else if(filter.length > 0){
        const countryArray = data.map(item => item.country)
        countryArray.sort()
        const countryBtns =  countryArray.map(item => {
            var buttonStyle = {
                background: randomColor()
            }
            //determining color of button & SELECTED button**********
            if(item === filter[0].country){
                buttonStyle = {
                    background: "transparent",
                    border: "1px solid white",
                    color: "#fff",
                    padding: '5px'
                }
            }
            return <div onClick={()=>{handleFilter(item)}} style={buttonStyle} key={Math.random()} className="countryButton">{item}</div>
        });
        return (
            <div class="mainContainer">
                <div className="countryButtonContainer">
                    <div onClick={()=>{handleFilter("all")}} style={{fontWeight: "bold", color: "#fff"}} key={Math.random()} className="countryButton">VIEW ALL</div>
                    {countryBtns}
                </div>
                <Rona data={filter[0]} />
            </div>
        )
        } else {
        const newArray = data.map(item => {
            return <Rona data={item} key={Math.random()} />
        });
        
        //create buttons for each country
        const countryArray = data.map(item => item.country)
        countryArray.sort()
        const countryBtns =  countryArray.map(item => {
            return <div onClick={()=>{handleFilter(item)}} style={{background: randomColor()}} key={Math.random()} className="countryButton">{item}</div>
        });
        
        
        return (
            <div class="mainContainer">
                <div className="countryButtonContainer">
                    {countryBtns}
                </div>
                {newArray}
            </div>
            )
    }
}

export default App