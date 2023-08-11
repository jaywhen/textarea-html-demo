import { Component, HostListener } from '@angular/core';
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
      return `<span class='val py-2 bg-sky-200 rounded-md'">${item}</span>`;
    });
  }

  @HostListener('click', ['$event.target'])
  onClick(item: any) {
    if (item instanceof HTMLSpanElement && item.className.startsWith('val')) {
      const itemClass = item.className;
      console.log('clicked', item.innerText);
    }
  }
}
