import { useDispatch, useSelector } from "react-redux";
import { Button, Contact, ContactsList } from "./ListContacts.styled";
import { contactsSelector } from "store/contacts/selectors";
import { deleteAction } from "store/contacts/actions";

const ListContacts = () => {
  const data = useSelector(contactsSelector);
  console.log(data)
  const dispatch = useDispatch();
  const deleteContact = event => {
    const { id } = event.target;
    console.log(id)
    dispatch(deleteAction(id));
  }
  return (
    <ContactsList>
      {data.contacts.map(contact => (
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