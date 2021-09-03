import { Component, OnInit } from '@angular/core';
import { Micro3Service } from 'src/app/service/micro3/micro3.service';

@Component({
  selector: 'app-micro3',
  templateUrl: './micro3.component.html',
  styleUrls: ['./micro3.component.css']
})
export class Micro3Component implements OnInit {

  text = "";
  constructor(
    private micro3: Micro3Service
  ) { }

  ngOnInit(): void {
    this.micro3.GetText().subscribe(
      (res) => {
        this.text = res;
      }, (err) => {
        console.log(err);
      }
    )
  }

}
