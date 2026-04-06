import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);
    const[visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountry = (country) => {
        //console.log("Visited Country Clicked",country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    const countriesData = use(countriesPromise); 
    const countries = countriesData.countries;
    // console.log(countries); 
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h3>Total Visited Countries: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div>
                {
                    visitedFlags.map(flag => <img key={flag} src={flag} alt="Visited Flag" />)
                }
            </div>
            <div className='Countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country} 
                        handleVisitedCountry = {handleVisitedCountry} 
                        handleVisitedFlag = {handleVisitedFlag}
                        />)
                }
            </div>
        </div>
    );
};

export default Countries;