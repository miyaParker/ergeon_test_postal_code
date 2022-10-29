import {DropdownProps } from "../commons/types";

const Dropdown = ({suggestions, handleClick}: DropdownProps) => {
    return (
        <div className="dropdown">
            {suggestions?.map((zipcode:string, id:number) => <span key={id} onClick={handleClick}>{zipcode}</span>)}
        </div>
    )
}
export default Dropdown
