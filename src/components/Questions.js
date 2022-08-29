import React, {useState} from 'react';
import './Questions.css'
import { useNavigate } from "react-router-dom";
 
const Questions = () => {
    const [id, SetId] = useState(1);
    const [dosent, setDosent] = useState(false);
    const [threeYear, setThreeYear] = useState(false);
    const [fiveYear, setFiveYear] = useState(false);
    const [tenYear, setTenYear] = useState(false);
    const [action, setAction] = useState(false);
    const [adventure, setAdventure] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [horror, setHorror] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log('hiiii')
        navigate('/dashboard')
    }
    


    return(
      ((id === 1) ?
        <div className='main'>
            <h3>Select the GENRE that you like</h3>
            <div className='container'>
                <input type="checkbox" id="action" name="action" checked={action} onChange={e => setAction(e.target.checked)}/>
                <label htmlFor="action">Action</label>
            </div >
            <div className='container'> 
                <input type="checkbox" id="animation" name="animation" checked={animation} onChange={e => setAnimation(e.target.checked)}/>
                <label htmlFor="animation">Animation</label>
            </div>
            <div className='container'>
                <input type="checkbox" id="horror" name="horror" checked={horror} onChange={e => setHorror(e.target.checked)}/>
                <label htmlFor="horror">Horror</label>
            </div>
            <div className='container'> 
                <input type="checkbox" id="adventure" name="adventure" checked={adventure}  onChange={e => setAdventure(e.target.checked)}/>
                <label htmlFor="adventure">Adventure</label>
            </div>
            <div>
                <button disabled = {!(action || animation || horror || adventure)} onClick={() => SetId(2)}>Next</button>
            </div>
        </div>
        :
            <div>
                <div className='main'>
                    <h3>How old would you likethe movie to be</h3>
                    <div className='container'>
                        <input type="checkbox" id="anything" name="anything" checked={dosent} onChange={e => setDosent(e.target.checked)} />
                        <label htmlFor="anything">Dosen't matter</label>
                    </div >
                    <div className='container'>
                        <input type="checkbox" id="3year" name="3year" checked={threeYear} onChange={e => setThreeYear(e.target.checked)} />
                        <label htmlFor="3year">Last 3 years</label>
                    </div>
                    <div className='container'>
                        <input type="checkbox" id="5year" name="5year" checked={fiveYear} onChange={e => setFiveYear(e.target.checked)} />
                        <label htmlFor="5year">Last 5 years</label>
                    </div>
                    <div className='container'> 
                        <input type="checkbox" id="10year" value="10year" checked={tenYear} onChange={e => setTenYear(e.target.checked)} />
                        <label htmlFor="10year">Last 10 years</label>
                    </div>
                    <div>
                        <button onClick={() => SetId(1)}>Prev</button>
                        <button disabled = {!( dosent || threeYear || fiveYear || tenYear)} onClick={ handleSubmit } className='submit' >Submit</button>

                    </div>
                </div>
            </div>
        )
    );
};

export default Questions;