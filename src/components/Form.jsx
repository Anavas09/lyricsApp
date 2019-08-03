import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Form({fetchLyric}){

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    })

    const handleOnChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        fetchLyric(search)
    }
    
    return (
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form 
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
                    onSubmit={handleOnSubmit}>
                      <fieldset>
                          <legend className="text-center">Lyrics Search</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artist</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artist" 
                                        placeholder="Artist name"
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Song</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="song" 
                                        placeholder="Song name"
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Search</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    );
};

Form.propTypes = {
    fetchLyric: PropTypes.func.isRequired,
};

export default Form;