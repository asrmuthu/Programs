import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MTHU';
  getName() {
    return 'pandi raj';
  }
  clickCount = 0;
  increment(){
    this.clickCount++;
  }
}
