
import { useDispatch } from "react-redux";
import { setFilter } from "redux/contacts/filterSlice";

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
 
  return (
    <label className={css.FilterLabel}>
    Find contacts by name:
      <input
        className={css.FilterInput}
      type="text"
      onChange={event => dispatch(setFilter(event.target.value))}
      placeholder="Find contacts by name"
    />
  </label>

  ) 

};



