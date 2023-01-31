import React, { Component } from 'react';
import shortid from 'shortid';
import propTypes from 'prop-types';
import { Form, FormInput, FormBtn } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputIdFirst = shortid.generate();
  nameInputIdSecond = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputIdFirst}>Name</label>
        <FormInput
          onChange={this.handleChange}
          id={this.nameInputIdFirst}
          value={this.state.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={this.nameInputIdSecond}>Number</label>
        <FormInput
          onChange={this.handleChange}
          id={this.nameInputIdSecond}
          value={this.state.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <FormBtn type="submit">Add contact</FormBtn>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};