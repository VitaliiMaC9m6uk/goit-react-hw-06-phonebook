import { createStore } from 'redux'

const reducer = (state, action) => {
    if (action.type === 'delete') {
        const filterId = state.contacts.filter(constact => constact.id !== action.payload);
        return { contacts: [...filterId] };       
    }
    // if (action.type === 'addContact') {
    //     return { contacts: [...state, action.payload] };
    // }
    return state
};

export const store = createStore(reducer, {
  contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  // [
  // { name: 'Vitalii', number: '123456', id: 'JOR7ogSvDE0KDlqph5QC8' },
  // { name: "Vitalii Bryzhatiuk", number: "123456", id: "eBAXkjOg5xQ1QAl4mG3Rj" },
  // { name: "Maryna Bryzhatiuk", number: "123456", id: "WzQmH-ItzdQkspo9BAQQ-" }
  // ],
});