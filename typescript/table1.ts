table1.ts 

import {Employe} from './table1.interface';

function Employee(employees:Employe[]){

    var element = document.getElementById("details");
    var table = document.createElement('TABLE');
    var tbBody = document.createElement('TBODY');

    table.classList.add("table");
    table.classList.add("table-bordered");
    table.appendChild(tbBody);
    var tr = document.createElement('TR');
    tr.classList.add("thead-dark");
    tbBody.appendChild(tr);

    var headings:string[]=["id","Name"];
    
    for (var heading of headings) {
        var th = document.createElement('TH')
        th.appendChild(document.createTextNode(heading));
        tr.appendChild(th);
    }

    for (var emp of employees) {
        var tr = document.createElement('TR');
            var td1 = document.createElement('TD');
            var td2 = document.createElement('TD');
            td1.appendChild(document.createTextNode(emp.id.toString()));
            td2.appendChild(document.createTextNode(emp.Name.toString()));
            tr.appendChild(td1);
            tr.appendChild(td2);
        tbBody.appendChild(tr);
    }
    element.appendChild(table)
}

var employees:Employe[] =
[
    {id:1,Name:"RAM"},
    {id:2,Name:"SITA"},
    {id:3,Name:"LUCKY"},
    {id:4,Name:"BHARATH"},
  
];
Employee(employees)
