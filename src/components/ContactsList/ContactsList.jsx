import React from 'react';
import './ContactsList.css';
import PropTypes from 'prop-types';
import { ContactItem } from 'components';
import { Empty, Title, Wrapper } from './ContactsList.styled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const EntryContainer = ({ children, ...props }) => {
  const nodeRef = React.useRef(null);
  return (
    <CSSTransition {...props} timeout={500} classNames="item" nodeRef={nodeRef}>
      <div ref={nodeRef}>{children}</div>
    </CSSTransition>
  );
};

const ContactsList = ({ contacts, deleteHandler }) => {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      {contacts.length > 0 ? (
        <ul>
          <TransitionGroup>
            {contacts.map(({ id, name, number }) => (
              <EntryContainer key={id}>
                <ContactItem
                  id={id}
                  name={name}
                  number={number}
                  deleteHandler={deleteHandler}
                />
              </EntryContainer>
            ))}
          </TransitionGroup>
        </ul>
      ) : (
        <Empty>Contact list is empty</Empty>
      )}
    </Wrapper>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteHandler: PropTypes.func,
};
