import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { DulieuService } from '../dulieu.service';
import { IDuAn } from '../idu-an';
import { ActivatedRoute } from '@angular/router';
import { INhanVien } from '../inhan-vien';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-duan-list',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterModule],
  templateUrl: './duan-list.component.html',
  styleUrl: './duan-list.component.css'
})
export class DuanListComponent implements OnInit {
  list_du_an:IDuAn[] = [];
  id: number = 0;
  data: IDuAn = <IDuAn>{};
  listNhanVien: INhanVien[] = [];
  isEditFormVisible: boolean = false;


  constructor(private d: DulieuService,private route: ActivatedRoute) {}

  ngOnInit():void {
    fetch(`http://localhost:3000/du_an`)
    .then (res => res.json() )
    .then (data => {
      this.list_du_an = data;
    })
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.d.layNhanVien().subscribe(data => {
      this.listNhanVien = data as INhanVien[];
    });
    this.d.lay1DuAn(this.id).subscribe(da => {
      console.log("da=", da);
      this.data = da as IDuAn;
    });
  }
  xoaDuAn(id: number): void {
    this.d.xoaDuAn(id).subscribe(() => {
      // Xóa thành công, cập nhật lại danh sách dự án
      this.list_du_an = this.list_du_an.filter(duan => duan.id !== id);
    });
  }

  showEditForm(duan:IDuAn) {
    this.data = { ...duan };
    this.isEditFormVisible = true;
    // console.log("Data being sent:", this.data); // Log dữ liệu trước khi gửi
    // this.d.suaDuAn(this.data).subscribe(
    //   result => {
    //     console.log("result=", result);
    //     alert('Sửa thành công');
    //     // chuyển đến danh sách dự án
    //   },
    //   error => {
    //     console.error("Error:", error); // Log lỗi nếu có
    //   }
    // );
  }
  hideEditForm(): void {
    this.isEditFormVisible = false;
  }
}
