import React, {useEffect, useState} from "react";
import Dropdown from "./Dropdown";
import {ZipCode, Suggestions} from "../commons/types";
import {isInvalidKey, suggestZipCodes, isValidZipCode} from "../utils/helpers";


const Input = () => {
    const [zipCode, setZipCode] = useState<ZipCode>("")
    const [isValidZip, setIsValidZip] = useState(false)
    const [suggestions, setSuggestions] = useState<Suggestions>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setZipCode(event.target.value);
    }
    const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
        const element = event.target as HTMLSpanElement;
        setZipCode(element.textContent);
        setSuggestions(null);
    }

    useEffect(() => {

        //reset autocomplete when the zipcode is less than 2 digits or exactly a 5-digit number
        if (zipCode?.length === 5) {
            setSuggestions(null)
            setIsValidZip(isValidZipCode(zipCode).length > 0)
        }
        if (zipCode !== null && zipCode.length < 2) setSuggestions(null);

        //show autocomplete when the user types in at least 2 digits of the zip code
        if (zipCode !== null && zipCode.length > 1 && zipCode.length < 5) {
            const suggestedZipCodes = suggestZipCodes(zipCode as string)
            setSuggestions(suggestedZipCodes);
        }
    }, [zipCode]);

    const handleKeyDown = (event: React.KeyboardEvent): void => {
        const element = event.target as HTMLInputElement
        if (isInvalidKey(event, element)) event.preventDefault();
    }
    const showError = () => {
        return Boolean(zipCode?.length === 5 && !isValidZip)
    }
    return (
        <form className="form">
            <label>Zip code</label>
            <input type="number" value={zipCode!} onChange={handleChange}
                   onKeyDown={handleKeyDown} min="0"
                   onPaste={(event) => {
                       event.preventDefault();
                   }}/>
            {showError() && <p className="error">The zip code is invalid</p>}
            {suggestions !== null && suggestions.length > 0 &&
                <Dropdown suggestions={suggestions} handleClick={handleClick}/>}
        </form>
    )
}
export default Input