import React from 'react';
import PropTypes from 'prop-types';

function Info({info}){

    if(Object.keys(info).length === 0){
        return null;
    }

    const { 
        strArtistThumb,
        strGenre,
        strBiographyES,
        strBiographyEN,
        strFacebook,
        strTwitter,
        strLastFMChart
     } = info

     const biography = strBiographyES ? 
        <p className="card-text">{strBiographyES}</p>:
        <p className="card-text">{strBiographyEN}</p>

    const lastFM = strLastFMChart ? 
        <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-lastfm"></i>
        </a>
        :
        null

    return (
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Artist Info
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Artist Logo" />
                <p className="card-text">Genre: {strGenre}</p>
                <h2 className="card-text text-center">Biography</h2>
                {biography}
                <p className="card-text">
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    {lastFM}
                </p>
            </div>
        </div>
    );
};

Info.propTypes = {
    info: PropTypes.object.isRequired,
};

export default Info;