import { useDispatch, useSelector } from "react-redux";
import { Button, Contact, ContactsList } from "./ListContacts.styled";

const ListContacts = () => {
  const contacts = useSelector(state => state.contacts);
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