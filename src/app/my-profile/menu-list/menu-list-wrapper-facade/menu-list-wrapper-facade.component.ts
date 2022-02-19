import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { RestUserMenuItem } from 'src/libs/dto';




@Component({
  selector: 'app-menu-list-wrapper-facade',
  templateUrl: './menu-list-wrapper-facade.component.html',
  styleUrls: ['./menu-list-wrapper-facade.component.css']
})

export class MenuListWrapperFacadeComponent implements OnInit {

  openTabs: RestUserMenuItem[] = []
  activeLink = this.openTabs[0];
  selected = new FormControl(0);
  constructor() { }

  ngOnInit(): void {

  }


  getCurrentTabType(index: number): string {
    return this.openTabs[index] ? this.openTabs[index].type : "";
  }

  openTab(relLink: string, name: string, type: string) {
    const newTab: RestUserMenuItem = { name: name, relLink: relLink, type: type }
    if (this.tabAlreadyOpened(newTab)) {
      this.selected = new FormControl(this.openTabs.map(e => e.name).indexOf(newTab.name));
    } else {
      this.openTabs.push(newTab);
      this.selected.setValue(this.openTabs.length - 1);
    }
  }

  closeTab(index: number) {
    this.openTabs.splice(index, 1);
  }

  onTabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.selected = new FormControl(tabChangeEvent.index);
  }

  tabAlreadyOpened(newTab: RestUserMenuItem) {
    return this.openTabs.some(function (tab) {
      return tab.name === newTab.name;
    });
  }
}
