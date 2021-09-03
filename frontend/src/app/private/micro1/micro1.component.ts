import { Component, OnInit } from '@angular/core';
import { Micro1Service } from '../../service/micro1/micro1.service';

@Component({
  selector: 'app-micro1',
  templateUrl: './micro1.component.html',
  styleUrls: ['./micro1.component.css']
})
export class Micro1Component implements OnInit {

  text = "";
  constructor(
    private micro1: Micro1Service
  ) { }

  ngOnInit(): void {
    this.micro1.GetText().subscribe(
      (res) => {
        this.text = res;
      }, (err) => {
        console.log(err);
      }
    )
  }

}
