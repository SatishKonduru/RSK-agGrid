import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
private _dataURL ='../../assets/sharedData/data.json'

private _getDataURL ='http://localhost:3000/Employee'
private _updateURL ='http://localhost:3000/Employee'
  constructor(private _http: HttpClient) { }

  getEmpData(){
  return  this._http.get<any>(this._dataURL)
  }

  getData(){
    return this._http.get<any>(this._getDataURL)
  }

  updateEmpData(id: number, changes){
    console.log(id)
    console.log(changes)
    return this._http.put<any>(`${this._updateURL}/${id}`, changes)
  }
}
