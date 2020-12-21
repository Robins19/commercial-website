import { Component, OnInit, Input } from '@angular/core';
import { ShowAllMenusApiService } from '../../../core/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  selectedAllMenus: any;

  constructor(
    private showAllMenusApiService: ShowAllMenusApiService,
  ) { }

  ngOnInit() {
    this.fetchAllMenus();
  }

  private fetchAllMenus(): void {
    this.showAllMenusApiService.ShowAllMenus().subscribe((response: any) => {
      if (response.menu) {
        this.selectedAllMenus = response.menu.split(',');
      }

    })
  }

  openMegaMenu() {
    let pane = document.getElementsByClassName('cdk-overlay-pane');
    [].forEach.call(pane, function (el) {
      if (el.children.length > 0) {
        if (el.children[0].classList.contains('mega-menu')) {
          el.classList.add('mega-menu-pane');
        }
      }
    });
  }

}
