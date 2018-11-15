import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user =[
    {eid:101,ename:"Ram",salary:10000},
    {eid:102,ename:"Sita",salary:10500},
    {eid:103,ename:"Lucky",salary:9200},
    {eid:104,ename:"Bharath",salary:10000},
    {eid:105,ename:"Vani",salary:9000},
    {eid:106,ename:"Rani",salary:8000},
    {eid:107,ename:"Chinoda",salary:80000},
    {eid:108,ename:"Hero",salary:50000}
];

  title = 'EMPLOYEE-DETAILS';
}
