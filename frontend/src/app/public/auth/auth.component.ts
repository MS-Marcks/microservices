import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  hash = "";
  token = "";
  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  onGenerate(): void {
    if (this.hash !== "") {
      this.service.GetToken({ hash: this.hash }).subscribe(
        (res) => {
          this.token = res;
          localStorage.setItem("token", res);
        }
      )
    } else {
      alert("Debe de colocar una palabra");
    }
  }

}
