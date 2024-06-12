// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { DulieuService } from '../dulieu.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { INhanVien } from '../inhan-vien';
// import { IDuAn } from '../idu-an';

// @Component({
//   selector: 'app-duan-sua',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './duan-sua.component.html',
//   styleUrl: './duan-sua.component.css'
// })
// export class DuanSuaComponent {
//   id:number = 0;
//   data:IDuAn = <IDuAn>{};
//   listNhanVien:INhanVien[] = [];
//   constructor(
//     private d:DulieuService,
//     private route:ActivatedRoute
//   ) {}
//   // ngOnInit
//   ngOnInit(): void {
//     this.id = Number(this.route.snapshot.paramMap.get('id'));
//     this.d.layNhanVien().subscribe (data => {
//       this.listNhanVien = data as INhanVien[];
//     });
//     this.d.lay1DuAn(this.id ).subscribe (da => {
//       console.log("da=", da );
//       this.data = da as IDuAn;
//     });
//   } // ngOnInit

//   //xu ly
//   xuly(){
//     this.d.suaDuAn(this.data).subscribe (result => {
//       console.log("result=", result );
//       alert('sửa thành công');
//       // chuyển đến danh sách dự án
//     });
//   }

// }


//// Sửa lại commponnent mới

// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { DulieuService } from '../dulieu.service';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { INhanVien } from '../inhan-vien';
// import { IDuAn } from '../idu-an';

// @Component({
//   selector: 'app-duan-sua',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './duan-sua.component.html',
//   styleUrls: ['./duan-sua.component.css'] // Sửa lại 'styleUrl' thành 'styleUrls'
// })
// export class DuanSuaComponent {
//   id: number = 0;
//   data: IDuAn = <IDuAn>{};
//   listNhanVien: INhanVien[] = [];

//   constructor(
//     private d: DulieuService,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.id = Number(this.route.snapshot.paramMap.get('id'));
//     this.d.layNhanVien().subscribe(data => {
//       this.listNhanVien = data as INhanVien[];
//     });
//     this.d.lay1DuAn(this.id).subscribe(da => {
//       console.log("da=", da);
//       this.data = da as IDuAn;
//     });
//   }

//   xuly() {
//     this.d.suaDuAn(this.data).subscribe(result => {
//       console.log("result=", result);
//       alert('Sửa thành công');
//       // chuyển đến danh sách dự án
//     });
//   }
// }


// sửa lại component cho duan_sua

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DulieuService } from '../dulieu.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { INhanVien } from '../inhan-vien';
import { IDuAn } from '../idu-an';

@Component({
  selector: 'app-duan-sua',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent {
  id: number = 0;
  data: IDuAn = <IDuAn>{};
  listNhanVien: INhanVien[] = [];

  constructor(
    private d: DulieuService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.d.layNhanVien().subscribe(data => {
      this.listNhanVien = data as INhanVien[];
    });
    this.d.lay1DuAn(this.id).subscribe(da => {
      console.log("da=", da);
      this.data = da as IDuAn;
    });
  }

  xuly() {
    console.log("Data being sent:", this.data); // Log dữ liệu trước khi gửi
    this.d.suaDuAn(this.data).subscribe(
      result => {
        console.log("result=", result);
        alert('Sửa thành công');
        // chuyển đến danh sách dự án
      },
      error => {
        console.error("Error:", error); // Log lỗi nếu có
      }
    );
  }
}

