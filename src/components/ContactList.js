import PropTypes from "prop-types";
import { Button, ButtonWrapper } from "./styled/Common.styled";
import { ListContact } from "./styled/ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListContact>
      {contacts.map(({ id, name, tel }) => {
        return (
          <li key={id}>
            {name}:{tel}
            <ButtonWrapper>
              <Button ml={3} type="button" onClick={() => onDeleteContact(id)}>
                Delete
              </Button>
            </ButtonWrapper>
          </li>
        );
      })}
    </ListContact>
  );
};

ContactList.protoTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
