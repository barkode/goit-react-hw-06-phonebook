import PropType from 'prop-types';
import React from 'react';
import { FieldName, Input, Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const { value } = e.target;
    dispatch(setFilter(value.toLowerCase().trim()));
  };

  return (
    <Label>
      <FieldName>Find abonent by Name</FieldName>
      <Input
        type="text"
        name="filter"
        title="To find abonent enter they name"
        placeholder="Searching ....."
        value={filter}
        onChange={handleChangeFilter}
      />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropType.string,
  onFilterChange: PropType.func,
};
