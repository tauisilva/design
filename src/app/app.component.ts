import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'design';
  theme: string = 'dark';
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router : Router
    ) {}

  toggleTheme(){
    this.theme = this.theme === 'dark' ? 'light' : 'dark';

    const body = this.el.nativeElement.ownerDocument.body;
    this.renderer.removeClass(body, this.theme === 'dark' ? 'light-theme' : 'dark-theme');
    this.renderer.addClass(body, this.theme === 'dark' ? 'dark-theme' : 'light-theme');
    this.router.navigate(['.'], { relativeTo: this.router.routerState.root });
  }
}
