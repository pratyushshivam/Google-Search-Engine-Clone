import React, { useState } from 'react'
import './Search.css'
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue} from "../StateProvider";
import { actionTypes} from "../reducer"

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();
    const search = e => {
        e.preventDefault(); // prevent the reload of the page when we click on the search bar
        console.log("You hit search >", input)
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input //track the input here

        })





        //do something with the input
        history.push('/search') // pushing to the search page and it is very smooooooooth






    }
    return (
        <form className='Search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className='search__buttons'>
                    <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>


            ) : (
                    <div className='search__buttons'>
                        <Button className="search__buttonsHidden" type='submit' onClick={search} variant="outlined">Google Search</Button>
                        <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                )}







        </form>
    )
}

export default Search
