import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm! : FormGroup ;
  constructor( private service : MemberService, private router : Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      name: new FormControl(),
      tel: new FormControl(),
      lineId: new FormControl(),
      sex: new FormControl(),
      address: new FormControl(),
      birthday: new FormControl()
    })
  }

  addMember(){
    let member = {
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      name: this.registerForm.value.name,
      tel: this.registerForm.value.tel,
      lineId: this.registerForm.value.lineId,
      sex: this.registerForm.value.sex,
      address: this.registerForm.value.address,
      birthday: this.registerForm.value.birthday
    };

    this.service.addMember(member).subscribe(res=>{
      console.log(res);
      if(res.msg="Register Success"){
        window.alert("Register Success");
        this.router.navigate(["/login"])
      }else{
        window.alert("Not Register");
        this.router.navigate(["/register"])
      }
    });
  }

  
}
