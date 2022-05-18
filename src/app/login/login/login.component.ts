import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  @Input() isLoged = false;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  login() {
    this.http.get<any>('http://localhost:3000/users')
      .subscribe(res => {
          const user = res.find((a: any) => {
            return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
          });
          if (user) {
            this.isLoged = true;
            alert("Login Success");
            this.loginForm.reset();
            this.router.navigate(['movies']);
          } else {
            alert("User not found");
          }
        }, error => {
          alert("Something went wrong")
        }
      );
  }
}
