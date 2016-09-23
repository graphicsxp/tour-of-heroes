import { Component, OnInit }      from '@angular/core';
import { ContactService } from '../service/contact.service';
import { Contact } from '../model/contact.model';
import { UserService }    from '../../core/service/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: './contact/contact.component.html',
  styleUrls: ['./contact/contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:  Contact;
  contacts: Contact[];
  msg = 'Loading contacts ...';
  userName = '';

  constructor(private _contactService: ContactService, _userService: UserService) {
    this.userName = _userService.userName;
  }

  ngOnInit() {
    this._contactService.getContacts().then(contacts => {
      this.msg = '';
      this.contacts = contacts;
      this.contact = contacts[0];
    });
  }

  next() {
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix >= this.contacts.length) { ix = 0; }
    this.contact = this.contacts[ix];
  }

  onSubmit() {
    // POST-DEMO TODO: do something like save it
    this.displayMessage('Saved ' + this.contact.name);
  }

  newContact() {
    this.displayMessage('New contact');
    this.contact = {id: 42, name: ''};
    this.contacts.push(this.contact);
  }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }
}
