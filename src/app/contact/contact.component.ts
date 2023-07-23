import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollToTop(): void {
    window.scroll(0, 0);
  }

  myName: string = 'Aditya Singh';
  myLocation: string = 'Delhi, India';
  myEmail = 'samant04aditya@gmail.com';
  username = '';
  useremail = '';
  message = '';
  showMsg = false;

  public sendEmail(e: Event, login: NgForm) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_d7m12hc',
        'template_zlqechm',
        e.target as HTMLFormElement,
        'GSEDqHIPmrchJJElf'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result);
          this.showMsg = true;
          setTimeout(() => {
            this.showMsg = false;
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    login.reset();
  }
}
