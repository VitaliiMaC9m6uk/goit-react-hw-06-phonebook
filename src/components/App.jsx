import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ListContacts from "./ListContacts/ListContacts";
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'store/contacts/selectors';
import { addAction } from 'store/contacts/actions';

export const App = () => {
  // const [contacts, setContacts] = useState(()=>{
// return  JSON.parse(window.localStorage.getItem('contacts'))??[];
// }    
//   );
  // const [filter, setFilter] = useState(''); 

  const data = useSelector(contactsSelector);
  const dispatch = useDispatch();
  
  const hendleSubmit = e => {
    if (data) {
      const filterContacts = data.contacts.filter(
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
    dispatch(
      addAction({
        name: e.name,
        number: e.number,
        id: nanoid(),
      })
    );        
  };
  
  // const hendleSaveFind = ({ target: { value } }) => {
  //   setFilter(value);
  // };

  // const hendleFilter = () => {
  //   const filterContacts = data.contacts.filter(contact =>
  //     contact.name
  //       .toLowerCase()
  //       .indexOf(filter.toLowerCase()) > -1);
  //   return filterContacts;
  // };

  // const deleteContact = event => {
  //   const { id } = event.target;
  //   const filterId = contacts.filter(constact => constact.id !== id);
  //   setContacts([...filterId]);    
  // };
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(data.contacts));
  }, [data]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        submit={hendleSubmit}
      />
      <h2>Contacts</h2>
      <Filter
        // filter={hendleSaveFind}
      />
      <ListContacts
        // list={hendleFilter()}
        // deleteName={deleteContact}
      />
    </div>
  );
}
