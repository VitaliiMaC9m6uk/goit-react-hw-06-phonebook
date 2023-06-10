export const initialState = {
    contacts: [
  { name: 'Vitalii', number: '123456', id: 'JOR7ogSvDE0KDlqph5QC8' },
  { name: "Vitalii Bryzhatiuk", number: "123456", id: "eBAXkjOg5xQ1QAl4mG3Rj" },
  { name: "Maryna Bryzhatiuk", number: "123456", id: "WzQmH-ItzdQkspo9BAQQ-" }
  ],
    filter:'',
};

// [
//   { name: 'Vitalii', number: '123456', id: 'JOR7ogSvDE0KDlqph5QC8' },
//   { name: "Vitalii Bryzhatiuk", number: "123456", id: "eBAXkjOg5xQ1QAl4mG3Rj" },
//   { name: "Maryna Bryzhatiuk", number: "123456", id: "WzQmH-ItzdQkspo9BAQQ-" }
//   ],
// JSON.parse(window.localStorage.getItem('contacts')) ?? []