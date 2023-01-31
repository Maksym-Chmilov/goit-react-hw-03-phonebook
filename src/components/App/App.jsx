import React, { Component } from 'react';
import shortid from 'shortid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AppBox, SectionTitle } from './App.styled';
const LS_KEY = 'saveContacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem(LS_KEY);

    if (contacts) {
      const saveContacts = JSON.parse(contacts);
      this.setState({ contacts: saveContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(nextContacts));
    }
  }

  addNewContacts = obj => {
    const { name, number } = obj;

    const includesName = this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (includesName) {
      return alert(`${name} is already in contacts`);
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState( prevState  => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisible = () => {
    const normalasedFilter = this.state.filter.toLocaleLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalasedFilter)
    );
  };

  render() {
    const visibleFilter = this.getVisible();
    return (
      <AppBox>
        <SectionTitle>Phonebook</SectionTitle>
        <ContactForm onSubmit={this.addNewContacts} />

        <SectionTitle>Contacts</SectionTitle>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleFilter}
          onDeleteContact={this.deleteContact}
        />
      </AppBox>
    );
  }
}
