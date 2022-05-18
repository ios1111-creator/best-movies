import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Users} from '../../models/movie';

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
      name: [''],
      email: [''],
      password: ['']
    });
  }

  register() {
    this.http.post<Users>('http://localhost:3000/users', this.registerForm.value)
      .subscribe(res => {
        alert('Register Successfull');
        console.log(res);
        this.router.navigate(['login']);
        this.registerForm.reset();
      }, error => {
        alert('Something went wrong');
      });
  }
}
