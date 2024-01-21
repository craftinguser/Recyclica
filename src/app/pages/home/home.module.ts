import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import{ComponentsModule} from 'src/app/components/pickup-call-card/components.module';

// import{Camera} from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule
   
  ],
  declarations: [HomePage],
  // providers: [Camera],
})
export class HomePageModule {}
