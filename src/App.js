import React, { Component } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { Container } from "./components/styled/Container.styled";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const saveContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(saveContacts);
    if (parseContacts) {
      this.setState({contacts:parseContacts})
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
}
  }

  formSubmit = ({ name, tel }) => {
    const { contacts } = this.state;
    const contact = {
      name,
      tel,
      id: nanoid(),
    };

    if (contacts.find((item) => item.name === contact.name)) {
      toast.error(`${contact.name} is already in contacts!`);
      return;
    }
    this.setState({
      contacts: [contact, ...contacts],
    });
  };

  onFilterContacts = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  onDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Toaster />
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onFilterContacts} />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </Container>
    );
  }
}
export default App;
