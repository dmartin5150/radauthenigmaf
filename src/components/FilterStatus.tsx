import React, {FC, useState, useEffect} from "react";
import { DndItemProps } from "./DndList";
import './FilterStatus.css'
import { itemProps } from "./items";


type FilterStatusProps = itemProps & {
    onFilterStatusChanged: (id:number, status:boolean) => void;
}


const FilterStatus: FC<FilterStatusProps> = (props) => {
    const {name, id, onFilterStatusChanged} = props;
    const [isEnabled,setIsEnabled] = useState<boolean>(false);
    const [showResults, setShowResults] = useState<boolean>(true);
    const [filterId, setFilterId] = useState<string>("")



    const changedEnabled = () => {
        console.log('target')
        setIsEnabled(!isEnabled)
    }

    const changeShowResults = () => {
        setShowResults(!showResults)
    }

    useEffect(() => {
        setFilterId(id.toString())
    },[])

    useEffect(() => {
        console.log('id = ', filterId, 'isEnabled = ', isEnabled)
        onFilterStatusChanged(id, isEnabled)
    },[isEnabled,id])

    useEffect(()=> {
        console.log('id = ', filterId, 'show results = ', showResults)
    },[showResults,id])

    return (
        <div id={id.toString()} className='filterstatus'>
            <div className='filter-name'>
                <h3>{name}</h3>
            </div>
            <label>
                <input type="checkbox" onChange={changedEnabled} checked={isEnabled}  />
                Enable Filter
            </label>
            <label>
                <input type="checkbox" onChange={changeShowResults} checked={showResults} />
                Show Results
            </label>
        </div>
    )
}
export default FilterStatus;