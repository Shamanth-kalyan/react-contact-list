import React, { Fragment } from 'react';

export function ContactListView(props) {
  return (
    <Fragment>
      {props.contactList.length ? (
        props.contactList.map((contact) => (
          <div className="contacts-list" key={contact.id}>
            <div className="contact-image">
              <img src={contact.avatar} alt="contact image" />
            </div>
            <div className="contact-detail">
              <span>
                <strong> Name:</strong> {contact.first_name} {contact.last_name}
              </span>
              <span>
                <strong>Email:</strong> {contact.email}
              </span>
            </div>
          </div>
        ))
      ) : (
        <h3>No contacts present</h3>
      )}
    </Fragment>
  );
}
