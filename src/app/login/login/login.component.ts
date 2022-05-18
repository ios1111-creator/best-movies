import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Users} from '../../models/movie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  @Input() isLogged = false;

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
    this.http.get<Users[]>('http://localhost:3000/users')
      .subscribe(res => {
          const user = res.find((user: Users) => {
            // console.log(a);

            return user.email === this.loginForm.value.email && user.password === this.loginForm.value.password;
          });
          if (user) {
            this.isLogged = true;
            alert('Login Success');
            this.loginForm.reset();
            this.router.navigate(['app/movies']);
          } else {
            alert('User not found');
          }
        }, error => {
          alert('Something went wrong');
        }
      );
  }

}
