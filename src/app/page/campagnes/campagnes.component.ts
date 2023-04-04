import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campagnes',
  templateUrl: './campagnes.component.html',
  styleUrls: ['./campagnes.component.css']
})
export class CampagnesComponent implements OnInit {

    private _compagnesURL = 'assets/json/payload.json';
    private _brandURL = 'assets/json/brands.json';
    time : any;
    searchTerm = '';
    searchBrand = ''; 
    list_: any; 
    brands_:any; 
    term = '';
    brand = ''; 

  constructor(private http: HttpClient) { }

  public sendData(): void {
   
  }
  getCompagnie () {
    this.http.get<any>(this._compagnesURL).subscribe(data => {
        this.list_ = data.requests;
    });
  }
  getBrands () {
     this.http.get<any>(this._brandURL).subscribe(dataBrand => {
        this.brands_ = dataBrand;
    }) 
  }
  ngOnInit() {
     this.getCompagnie(); 
     this.getBrands();        
  }
}
