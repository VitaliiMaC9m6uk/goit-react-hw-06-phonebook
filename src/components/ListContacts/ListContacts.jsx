import { useDispatch, useSelector } from "react-redux";
import { Button, Contact, ContactsList } from "./ListContacts.styled";
import { contactsSelector } from "store/contacts/selectors";

const ListContacts = () => {
  const contacts = useSelector(contactsSelector);
  console.log(contacts)
  const dispatch = useDispatch();
  const deleteContact = event => {
    const { id } = event.target;
    dispatch({type:'delete',payload:id})
  }
  return (
    <ContactsList>
      {contacts.map(contact => (
        <Contact key={contact.id}>
          {contact.name} : {contact.number}
          <Button id={contact.id} onClick={deleteContact}>
            Delete
          </Button>
        </Contact>
      ))}
    </ContactsList>
  );
}
export default ListContacts;