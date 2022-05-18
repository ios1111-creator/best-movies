import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      password: ['']
    });
  }

  register() {
    this.http.post<any>('http://localhost:3000/users', this.registerForm.value)
      .subscribe(res => {
        alert("Register Successfull");
        this.router.navigate(['login']);
        this.registerForm.reset();
      }, error => {
        alert("Something went wrong");
      });
  }
}
