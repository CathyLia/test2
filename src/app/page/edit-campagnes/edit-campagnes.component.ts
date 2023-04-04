import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-campagnes',
  templateUrl: './edit-campagnes.component.html',
  styleUrls: ['./edit-campagnes.component.css']
})
export class EditCampagnesComponent implements OnInit {
   private _brandURL = 'assets/json/brands.json';
   private _compagnesURL = 'assets/json/payload.json';
   brands_:any;
   compagnes_:any;
   id : any;

 constructor(private http: HttpClient) { }
  ngOnInit(): void { 	
  	this.getBrands();
  }

  // getCompagnieById (this.id) {

  // }
  getBrands () {
     this.http.get<any>(this._brandURL).subscribe(dataBrand => {
        this.brands_ = dataBrand;
    }) 
  }
  send() {
  	console.log('Enregistrer avec succes')
  }
}
