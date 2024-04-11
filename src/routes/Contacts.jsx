import { useCallback, useMemo, useReducer, useRef } from "react";
import ContactEditor from "./../components/Contacts/ContactEditor";
import ContactList from "./../components/Contacts/ContactList";
import styles from "./../styles/Contacts.module.css";
import {
  ContactStateContext,
  ContactDispatchContext,
} from "./../context/Contacts";

const mockData = [
  { id: 1, name: "John", email: "johndoe@gmail.com" },
  { id: 2, name: "Jane", email: "janedoe@gmail.com" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

export default function Contacts() {
  const [contacts, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback(({ name, email }) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name,
        email,
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => ({ onCreate, onDelete }), []);

  return (
    <div className={styles.Container}>
      <h1 className={styles.Heading}>Contact List</h1>
      <ContactStateContext.Provider value={contacts}>
        <ContactDispatchContext.Provider value={memoizedDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}
