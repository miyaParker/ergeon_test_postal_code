import {DropdownProps, ProvinceType} from "../commons/types";

const Dropdown = ({suggestions, handleClick}: DropdownProps) => {
    return (
        <div className="dropdown">
            {suggestions?.map((suggestion: ProvinceType) => <span onClick={handleClick}>{suggestion.zipcode}</span>)}
        </div>
    )
}
export default Dropdown
