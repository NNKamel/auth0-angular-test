import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public auth: AuthService, private testService: TestService) { }

  ngOnInit(): void {
    // this.auth.login();
  }

  testLogin() {
    console.log("testing login");
    this.auth.login();
  }

  testLogout() {
    console.log("object");
    this.auth.logout();
  }

  testAPI() {
    this.testService.testApi().then(reply => {
      console.log(reply);
    });
  }


  testAdmin() {
    this.testService.testAdmin().then(reply => {
      console.log(reply);
    });
  }

  testModerator() {
    this.testService.testModerator().then(reply => {
      console.log(reply);
    });
  }


  testAPI2() {
    this.testService.testApi2().then(reply => {
      console.log("in test 2");
      console.log(reply);
    });
  }

  testLoggedOut() {
    this.testService.testloggedout().then(reply => {
      console.log(reply);
    });
  }

  testGetData() {
    this.testService.testGetData().then(reply => {
      console.log(reply);
    });
  }

  testAddAdmin() {
    this.testService.testAddAdmin().then(reply => {
      console.log(reply);
    });
  }

  testRemoveAdmin() {
    this.testService.testRemoveAdmin().then(reply => {
      console.log(reply);
    });
  }

}
