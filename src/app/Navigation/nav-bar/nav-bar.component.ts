import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}





















// this.patientService.addNewPatient(patient).subscribe(data => {
//   if (data == null) alert("Patient Infromation Saved Successfully.");
//   window.location.reload();
// },
//   error => console.log("error", error)

// )