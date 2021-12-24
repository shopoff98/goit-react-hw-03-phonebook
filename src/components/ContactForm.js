import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input, Label } from "./styled/Common.styled";
import { Form } from "./styled/ContactForm.styled";

class ContactForm extends Component {
  state = {
    name: "",
    tel: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      tel: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </Label>

        <Label>
          Telephone
          <Input
            type="tel"
            name="tel"
            value={this.state.tel}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </Label>
        <Button mb={1} type="submit">
          Add contact
        </Button>
      </Form>
    );
  }
}

ContactForm.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
