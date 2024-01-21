import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  imgURL: any;

  constructor(private router :Router) { }

//   getCamera(){
//     this.camera.getPicture().then((res) =>{
// this.imgURL = res;
//     }).catch(e=>{
//       console.log(e);
//     })
//   }

//   getGallery(){}

  ngOnInit() {
  }

  goToPickupCalls(){
    this.router.navigate(['pickup-calls']);
  }
  newPickupCall(){
    this.router.navigate(['pickup-call']);
  }
}
