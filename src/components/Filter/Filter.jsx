import shortid from 'shortid';
import propTypes from 'prop-types';
import { FilterName, FilterStyle } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  const nameInputIdThird = shortid.generate();
  return (
    <div>
      <FilterStyle htmlFor={nameInputIdThird}>
        Find contacts by name
      </FilterStyle>
      <FilterName
        id={nameInputIdThird}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};