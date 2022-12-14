import React from "react";

export type ProvinceType = {
    country_code: string;
    zipcode: string;
    place: string;
    state: string;
    state_code: string;
    province: string;
    province_code: string;
    community: string;
    community_code: string;
    latitude: string;
    longitude: string;
}

export type DropdownProps = {
    suggestions: string[]|null;
    handleClick: (event: React.MouseEvent<HTMLSpanElement>) => void
}
export type Suggestions = string[] | null
export type ZipCode = string | null