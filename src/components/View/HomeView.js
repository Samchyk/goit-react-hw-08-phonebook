import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import UserMenu from 'components/UserMenu/UserMenu';

export default function HomeView() {
  const filter = '';

  return (
    <>
      <UserMenu />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter filter={filter} />
      <ContactList filter={filter} />
    </>
  );
}
