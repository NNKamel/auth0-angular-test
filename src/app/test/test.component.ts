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
    this.auth.login();
  }

  testAPI() {
    this.testService.testApi().then(reply => {
      console.log(reply);
    });
  }

}
