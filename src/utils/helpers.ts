import usZipCodeJSON from "../data/zipcodes.us.json";
import {ProvinceType} from "../commons/types";
import React from "react";

export const suggestZipCodes = (partial: string) => {
    const suggestedZipCodes = usZipCodeJSON.filter((province: ProvinceType) => province.zipcode.startsWith(partial))
    return suggestedZipCodes
}

export const isInvalidKey = (event: React.KeyboardEvent, element: HTMLInputElement) => {
    //check if input is correct length and does not contain invalid numeric symbols
    // with the exemption of up arrow, down arrow, left arrow, right arrow, and backspace
    const unacceptableKeys = ["e", "E", "+", "-", "."]
    return (element.value.length >= 5 &&
        event.keyCode !== 8 &&
        event.keyCode !== 37 &&
        event.keyCode !== 38 &&
        event.keyCode !== 39 &&
        event.keyCode !== 40) || unacceptableKeys.includes(event.key)
}

export const isValidZipCode = (zipCode: string) => {
    return usZipCodeJSON.filter((province: ProvinceType) => zipCode === province.zipcode)
}