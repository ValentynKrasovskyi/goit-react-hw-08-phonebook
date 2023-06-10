
import { useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/filterSlice";
// import './Filter.module.css';


export const Filter = () => {
  const dispatch = useDispatch();
 
  return (
    <label>
    Find contacts by name:
    <input
      type="text"
      onChange={event => dispatch(setFilter(event.target.value))}
      placeholder="Find contacts by name"
    />
  </label>

  ) 

};



