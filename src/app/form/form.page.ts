import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ToastController, AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  txtName;
  txtEmail;
  txtGender;
  txtDate;
  txtPassword;

  constructor(public actionSheetController: ActionSheetController, public toastController: ToastController, public alertController: AlertController, private router: Router, private datePipe: DatePipe) { }

  ngOnInit() {
  }
  hoverColorPrimary() {
    var x = document.getElementById("btnConfirm");
    x.setAttribute("color", "primary");
  }

  hoverColorSuccess() {
    var x = document.getElementById("btnConfirm");
    x.setAttribute("color", "success");
  }

  async clearToast() {
    this.txtName="";
    this.txtPassword = "";
    this.txtEmail = "";
    this.txtGender = "";
    this.txtDate = "";


    const toast = await this.toastController.create({
      message: 'Form has been cleared.',
      duration: 1000,
      color: 'dark'
    });
    toast.present();
  }

  async submitToast() {
    const toast = await this.toastController.create({
      message: 'Your form has been submitted.',
      duration: 1000,
      color: 'dark'
    });
    toast.present();
  }
  async saveToast() {
    const toast = await this.toastController.create({
      message: 'Form details have been saved.',
      duration: 1000,
      color: 'dark'
    });
    toast.present();
  }

  // async genderSelect(){
  //   var x = document.getElementById("txtGender");
  //   var y = document.getElementById("lblGender");



  //   const actionSheet = await this.actionSheetController.create({

  //     buttons: [{
  //       text: 'Male',
  //       icon: 'man',
  //       handler: () => {
  //         x.innerHTML="Male";

  //       }
  //     }, {
  //       text: 'Female',
  //         icon: 'woman',
  //       handler: () => {
  //         x.innerHTML = "Female";

  //       }
  //     },  {
  //       text: 'Cancel',
  //       icon: 'close',
  //       role: 'cancel',
  //       handler: () => {
  //         x.innerHTML = "";
  //         console.log('Cancel clicked');
  //       }
  //     }]
  //   });
  //   await actionSheet.present();

  // }


  async clearAD() {
    const alert = await this.alertController.create({
      header: 'Clear',
      message: 'Are you sure you want to clear details?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');

          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('CLeared Details');
            this.clearToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmAS() {
    const actionSheet = await this.actionSheetController.create({

      buttons: [{
        text: 'Submit',
        icon: 'checkmark',
        handler: () => {
          console.log('Submitted form');
          console.log('Name: ' + this.txtName);
          console.log('Password: ' + this.txtPassword);
          console.log('Email: ' + this.txtEmail);
          console.log('Gender: ' + this.txtGender);
          console.log('Date of Birth: ' + this.txtDate);
          this.tempButton();

          this.submitToast();
        }
      }, {
        text: 'Save',
        icon: 'heart',
        handler: () => {
          console.log('Saved details');
          this.saveToast();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  tempButton() {
    let testDate = this.datePipe.transform(this.txtDate, "MMM dd, yyyy")
    const navigationExtras: NavigationExtras = {
      state: {
        name: this.txtName,
        password: this.txtPassword,
        email: this.txtEmail,
        gender: this.txtGender,
        dob: testDate,
      }
    };

    // name = this.txtName;
    this.router.navigate(['/display'], navigationExtras);

  }

}
