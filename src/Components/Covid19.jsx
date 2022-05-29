import React, { useEffect, useState } from "react";

const Covid19 = () => {

    const [ name, setName ] = useState ('bangladesh')
    const [ confirmed, setConfirmed ] = useState ()
    const [ deaths, setDeaths ] = useState ()
    const [ date, setDate ] = useState ()

    // Global
    const [globalNewConfirmed, setGlobalNewConfirmed] = useState ()
    const [globalNewDeaths, setGlobalNewDeaths] = useState ()
    const [globalTotalConfirmed, setGlobalTotalConfirmed] = useState ()
    const [globalTotalDeaths, setGlobalTotalDeaths] = useState ()

    useEffect (() => {
        fetch (`https://api.covid19api.com/total/dayone/country/${name}`)
        .then ((response) => {
            return response.json()
        })
        .then ((data) => {
            let finalData = data.pop()
            // console.log(finalData)
            setName (finalData.Country)
            setConfirmed (finalData.Confirmed)
            setDeaths (finalData.Deaths)
            setDate (new Date().toLocaleDateString())
            // console.log (data)
        })
    })

    useEffect (() => {
        fetch ('https://api.covid19api.com/summary')
        .then ((response) => {
            return response.json ()
        })
        .then ((data) => {
            console.log(data);
            setGlobalNewConfirmed(data.Global.NewConfirmed)
            setGlobalNewDeaths(data.Global.NewDeaths)
            setGlobalTotalConfirmed(data.Global.TotalConfirmed)
            setGlobalTotalDeaths(data.Global.TotalDeaths)
        })
    }, [])

    const getInputCountry = () => {
        setName ( document.getElementById('input_country').value )
    }    

    return (
        <>
        <h1 className="text-center mt-3">Covid19 Live Tracker</h1>
        <div className="container mt-3 text-center">
            <input id="input_country" type="text" className="form-control" placeholder="Search Your Country Name . . . . ." />
            <button className="btn btn-danger mt-2" onClick={ getInputCountry }>Search</button>

            <div className="container mt-4 text-center">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="Country text-center" id="heading_name">
                            <h4><b>Country</b> Name</h4>
                            <h1>{ name }</h1>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>

                <div className="row mt-2">
                    <div className="col-lg-4 mt-sm-2">
                        <div className="Confirmed" id="heading_name">
                            <h4><b>Confirmed</b></h4>
                            <h1>{ confirmed }</h1>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-sm-2">
                        <div className="Deaths" id="heading_name">
                            <h4><b>Deaths</b></h4>
                            <h1>{ deaths }</h1>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-sm-2">
                        <div className="Date" id="heading_name">
                            <h4><b>Date</b></h4>
                            <h1>{ date }</h1>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <h2 className="text-center">Global Result</h2>
                            <div className="col-lg-3" id='heading_name'>
                                <h2>{globalNewConfirmed}</h2>
                            </div>
                            <div className="col-lg-3" id='heading_name'>
                                <h2>{globalNewDeaths}</h2>
                            </div>
                            <div className="col-lg-3" id='heading_name'>
                                <h2>{globalTotalConfirmed}</h2>
                            </div>
                            <div className="col-lg-3" id='heading_name'>
                                <h2>{globalTotalDeaths}</h2>
                            </div>
                    </div>

            </div>
        </div>
            
        </>
    )
}

export default Covid19


// Country
// Confirmed
// Deaths
// Date