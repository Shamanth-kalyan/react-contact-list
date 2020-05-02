import React, { useState, useEffect } from 'react';

import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh, faSearch } from '@fortawesome/free-solid-svg-icons';

import { ContactListView } from '../contact-list-view/contact-list-view';
import { ContactGridView } from '../contact-grid-view/contact-grid-view';

export function ContactList() {
  const [listView, setListView] = useState(true);
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    getContactList('');
  }, []);

  function getContactList(searchString) {
    fetch('https://reqres.in/api/users?page=1')
      .then((res) => res.json())
      .then((res) => {
        let searchList;
        if (searchString) {
          searchList = res.data.filter(
            (contact) =>
              contact.first_name
                .toLowerCase()
                .includes(searchString.toLowerCase()) ||
              contact.last_name
                .toLowerCase()
                .includes(searchString.toLowerCase()) ||
              contact.email.toLowerCase().includes(searchString.toLowerCase())
          );
        } else {
          searchList = res.data;
        }
        setContactList(searchList);
      });
  }

  function toggleView() {
    setListView(!listView);
  }

  function searchContact(e) {
    getContactList(e.target.value);
  }

  return (
    <div className="contact-list-container">
      <div className="search-contact">
        <InputGroup className="mb-3" onChange={searchContact}>
          <FormControl placeholder="Search string" aria-label="Search string" />
          <InputGroup.Append>
            <Button variant="outline-secondary">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <Button
          variant="primary"
          className="toggle-button"
          onClick={toggleView}
        >
          <FontAwesomeIcon icon={listView ? faList : faTh} />
        </Button>
      </div>

      <div className={listView ? 'contact-list-detail' : 'contact-grid-detail'}>
        {listView ? (
          <ContactListView contactList={contactList} />
        ) : (
          <ContactGridView contactList={contactList} />
        )}
      </div>
    </div>
  );
}
