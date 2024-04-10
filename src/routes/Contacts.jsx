import { useReducer } from "react";
import ContactEditor from "./../components/Contacts/ContactEditor";
import ContactList from "./../components/Contacts/ContactList";
import styles from "./../styles/Contacts.module.css";

const mockData = [
  { name: "John", email: "johndoe@gmail.com" },
  { name: "Jane", email: "janedoe@gmail.com" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
  }
};

export default function Contacts() {
  const [contacts, dispatch] = useReducer(reducer, mockData);

  const onCreate = ({ name, email }) => {
    dispatch({
      type: "CREATE",
      data: {
        name,
        email,
      },
    });
  };

  return (
    <div className={styles.Container}>
      <h1 className={styles.Heading}>Contact List</h1>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} />
      </section>
    </div>
  );
}
