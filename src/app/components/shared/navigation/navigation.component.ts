import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentUser: any;
  isLoggedIn = false;
  products : any ;
  name : any ;
  myProduct : any ;
  
  constructor(private tokenStorage: TokenStorageService ,private service : ProductService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if(this.isLoggedIn){
      this.currentUser = this.tokenStorage.getUser();
      console.log(this.currentUser);
    }

    
  }

  logout(){
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
