import React, { Fragment } from 'react';

import { Card } from 'react-bootstrap';

export function ContactGridView(props) {
  return (
    <Fragment>
      {props.contactList.length ? (
        props.contactList.map((contact) => (
          <Card className="contacts-grid" key={contact.id}>
            <Card.Img variant="top" src={contact.avatar} />
            <Card.Body>
              <Card.Text>
                <strong> Name:</strong> {contact.first_name} {contact.last_name}
              </Card.Text>
              <Card.Text>
                <strong>Email:</strong> {contact.email}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h3>No contacts present</h3>
      )}
    </Fragment>
  );
}
