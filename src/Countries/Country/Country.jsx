import React from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {

    const[visited, setVisited] = React.useState(false);

    const handleVisited = () => { 
        if(visited){
            setVisited(false);
        }else{
            setVisited(true);
        }
        console.log(`Visited ${country.name.common}`);
        handleVisitedCountry(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="country.flags.flags.alt" />
            <h2>Name: {country.name.common}</h2>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}{country.area.area > 300000 ? " (Big Country)" : " (Small Country)"}</p>
            <button className='btn-pressed' onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button className='btn-pressed' onClick={ () => {handleVisitedFlag(country.flags.flags.png)}}>
                Add Visited Flag
            </button>
        </div>
    );
};   
 
export default Country;