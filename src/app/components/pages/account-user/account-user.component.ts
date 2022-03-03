import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.css']
})
export class AccountUserComponent implements OnInit {
  id: any;
  memberForm!: FormGroup;
  currentMember: any;

  constructor(private service: MemberService, private router: Router, private activatedRouter: ActivatedRoute,private toast : NgToastService) { }

  ngOnInit(): void {
    this.memberForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      name: new FormControl(),
      tel: new FormControl(),
      lineId: new FormControl(),
      sex: new FormControl(),
      address: new FormControl(),
      birthday: new FormControl()
    });

    this.activatedRouter.params.subscribe((params)=>{
      this.id = params['id'];
    });

    this.service.getMemberById(this.id).subscribe((res)=>{
      this.currentMember = res.data;
      this.memberForm.controls['email'].setValue(this.currentMember.email);
      this.memberForm.controls['password'].setValue(this.currentMember.password);
      this.memberForm.controls['name'].setValue(this.currentMember.name);
      this.memberForm.controls['tel'].setValue(this.currentMember.tel);
      this.memberForm.controls['lineId'].setValue(this.currentMember.lineId);
      this.memberForm.controls['sex'].setValue(this.currentMember.sex);
      this.memberForm.controls['address'].setValue(this.currentMember.address);
      this.memberForm.controls['birthday'].setValue(this.currentMember.birthday);
     
    });
  }

  updateMember(){
    let member = {
      email: this.memberForm.value.email,
      password: this.memberForm.value.password,
      name: this.memberForm.value.name,
      tel: this.memberForm.value.tel,
      lineId: this.memberForm.value.lineId,
      sex: this.memberForm.value.sex,
      address: this.memberForm.value.address,
      birthday: this.memberForm.value.birthday
    }
    this.service.updateMember(member,this.id).subscribe((res: any)=>{
      this.router.navigateByUrl('/',{skipLocationChange: true})
      .then(()=>{
        this.router.navigate(['/']);
        this.toast.info({detail:'Success',summary:'อัพเดทข้อมูลส่วนตัวสำเร็จ', sticky:true,position:'tr'})
      });
    });
  }

}
