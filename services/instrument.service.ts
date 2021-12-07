import { Injectable } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
 // [x: string]: any;
 
  //instrument: Instrument = new Instrument();
 //instrument: Instrument = new Instrument();
  instruments: Instrument[]=[]; //un tableau de Instrument
 //un tableau de Instrument
 apiURL: string = 'http://localhost:8080/instruments/api';
  constructor(private http : HttpClient)
 {
/*this.instruments = [
{ idInstrument : 1, nomInstrument : "Violon", prixInstrument : 3000.600},
{ idInstrument : 2, nomInstrument : "Piano", prixInstrument : 450},
{ idInstrument : 3, nomInstrument :"Guitare", prixInstrument : 900.123}
];*/
}


  

listeInstruments():Observable<Instrument[]> {
//return this.instruments;
return this.http.get<Instrument[]>(this.apiURL);
}
ajouterInstrument( instr: Instrument):Observable<Instrument>{
  return this.http.post<Instrument>(this.apiURL, instr, httpOptions);
  }
  

supprimerInstrument(id : number){
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);}

 


    consulterInstrument(id: number): Observable<Instrument> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Instrument>(url);
      }
      
  updateInstrument(p:Instrument) : Observable<Instrument>
{
  return this.http.put<Instrument>(this.apiURL, p, httpOptions);
}


}
