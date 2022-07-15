import PropTypes from "prop-types";
import { ContactListBtn, Contact } from "./Contact.styled";

export const ContactItem = ({ contacts, onDeleteContact }) => {
    return (
        <>
            {contacts.map(contact => <Contact key={contact.id}>{contact.name}: {contact.number}
                <ContactListBtn type="button" onClick={() => onDeleteContact(contact.id)}>Delete</ContactListBtn>
            </Contact>)}
        </>
    );
};

ContactItem.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
};