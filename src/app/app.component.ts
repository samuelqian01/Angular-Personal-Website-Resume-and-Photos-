import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Samuel Qian';
  constructor (private titleService: Title) {
   
  }
  ngOnInit(): void {
    this.titleService.setTitle("Samuel Qian");
  }
}
