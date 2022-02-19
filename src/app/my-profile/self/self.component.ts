import { Component, OnInit } from '@angular/core';
import { MyProfileService } from '../my-profile.service';
import { FormControl } from '@angular/forms';
import { RestUserMenu, RestUserProfile } from 'src/libs/dto';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { AuthenticationServiceService } from 'src/app/authentication/authentication-service.service';
import { Router } from '@angular/router';

interface MenuNode {
  type:string,
  name: string;
  relLink: string
  children?: MenuNode[];
}

const TREE_DATA: MenuNode[] = [

]


@Component({
  selector: 'app-self',
  templateUrl: './self.component.html',
  styleUrls: ['./self.component.css']
})
export class SelfComponent implements OnInit {
  mode = new FormControl('side');
  isOpened = true;
  userProfile!: RestUserProfile;
  isLoaded: boolean = false;

  treeControl = new NestedTreeControl<MenuNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<MenuNode>();

  constructor(private _router: Router,private _myProfileService: MyProfileService ,private  _authenticationService:AuthenticationServiceService) {
    this.dataSource.data = TREE_DATA;
  }

  async ngOnInit() {
    this.userProfile = await this._myProfileService.myProfile().toPromise();
    console.log(this.userProfile.userMenu);
    this.userProfile.userMenu.forEach((menuEntry: RestUserMenu) => {
    const node:MenuNode[]= this.getAllLeafs(menuEntry);
    TREE_DATA.push({name:menuEntry.name,
      relLink:'',
      type:'',
      children:node})
    })
    this.isLoaded = true;
  }
  hasChild = (_: number, node: MenuNode) => !!node.children && node.children.length > 0;

  private getAllLeafs(menuEntry: RestUserMenu): MenuNode[] {
    const foordNode: MenuNode[] = []
    menuEntry.menuItems.forEach((menuItem) => {
      const node: MenuNode = {
        type:menuItem.type,
        name: menuItem.name,
        relLink: menuItem.relLink
      };
      foordNode.push(node);
    });
    return foordNode;
  }
  
  logout(){
 
    this._authenticationService.logout().subscribe(
      res=>{ this._router.navigateByUrl('/authentication')},
      err=>{console.log(err)}
    );
  }

}
