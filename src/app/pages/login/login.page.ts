import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';
import { LoginPageForm } from './login.page.form';
import { AppState } from 'src/store/AppState';
import { Store } from '@ngrx/store';
import { hide, show } from 'src/store/loading/loading.action';
import { recoverPassword } from 'src/store/login/login.action';
import { ToastController } from '@ionic/angular';
import { LoginState } from 'src/store/login/LoginState';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form!: FormGroup;

  constructor(private router :Router, private formBuilder: FormBuilder, private store : Store<AppState>,
   private toastController: ToastController) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();

    this.store.select('login').subscribe(loginState =>{
     this.onIsRecoveredPassword(loginState);
     this.onIsRecoveringPassword(loginState);
    })
  }

  private onIsRecoveringPassword(loginState:LoginState){
    if(loginState.isRecoveringPassword){
      this.store.dispatch(show());
    }
  
  }

  private async onIsRecoveredPassword(loginState:LoginState){
    if(loginState.isRecoveredpassword){
      this.store.dispatch(hide());
      const toaster = await this.toastController.create({
        position: "bottom",
        message:"Recovery email sent",
        color:"primary"
      });
      toaster.present();
    }
  }


  forgotEmailPassword(){
    // this.store.dispatch(show())
    this.store.dispatch(recoverPassword());

    setTimeout(() => {
      this.store.dispatch(hide())
    }, 3000);
  }

  login(){
    this.router.navigate(['home']);
  }

  register(){
    this.router.navigate(['register']);
  }
}
