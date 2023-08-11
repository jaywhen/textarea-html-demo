import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  value = '';

  realHTML = '';

  onInput() {
    this.realHTML = this.value.replace(/\{\{.*?\}\}/g, (item) => {
      console.log(item);
      return `<span class='py-2 bg-sky-200 rounded-md'>${item}</span>`;
    });
  }
}
