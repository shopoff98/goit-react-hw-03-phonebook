import PropTypes from "prop-types";
import { Input, Label } from "./styled/Common.styled";
import { FilterWrapper } from "./styled/Filter.styled";

const Filter = ({ value, onChange }) => {
  return (
    <FilterWrapper>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </FilterWrapper>
  );
};

Filter.protoTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
