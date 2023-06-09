import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ListContacts from "./ListContacts/ListContacts";
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  // const [contacts, setContacts] = useState(()=>{
// return  JSON.parse(window.localStorage.getItem('contacts'))??[];
// }    
//   );
  const [filter, setFilter] = useState(''); 

  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  
  const hendleSubmit = e => {
    if (contacts) {
      const filterContacts = contacts.filter(
        contact =>
          contact.name.toLocaleLowerCase().indexOf(e.name.toLocaleLowerCase()) >
          -1
      );
      if (filterContacts.length > 0) {
        const sameNames = filterContacts.map(contact => contact.name);
        return alert(`${sameNames} is already in contacts.`);
      }
    }
    // setContacts((prev) => {
    //   return [
    //     ...prev,
    //     {
          // name: e.name,
          // number: e.number,
          // id: nanoid(),
    //     },
    //   ];
    // })
    dispatch({
      type: 'addContact',
      payload: { name: e.name, number: e.number, id: nanoid() },
    });    
    
  };
  
  const hendleSaveFind = ({ target: { value } }) => {
    setFilter(value);
  };

  const hendleFilter = () => {
    const filterContacts = contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .indexOf(filter.toLowerCase()) > -1);
    return filterContacts;
  };
  // const deleteContact = event => {
  //   const { id } = event.target;
  //   const filterId = contacts.filter(constact => constact.id !== id);
  //   setContacts([...filterId]);    
  // };
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        submit={hendleSubmit}
      />
      <h2>Contacts</h2>
      <Filter
        filter={hendleSaveFind}
      />
      <ListContacts
        // list={hendleFilter()}
        // deleteName={deleteContact}
      />
    </div>
  );
}
