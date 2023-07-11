import PropType from 'prop-types';
import { FieldName, Input, Label } from './Filter.styled';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <Label>
      <FieldName>Find abonent by Name</FieldName>
      <Input
        type="text"
        name="filter"
        title="To find abonent enter they name"
        placeholder="Searching ....."
        value={filter}
        onChange={onFilterChange}
      />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropType.string.isRequired,
  onFilterChange: PropType.func.isRequired,
};
