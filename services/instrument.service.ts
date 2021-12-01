import { Injectable } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  
 
  //instrument: Instrument = new Instrument();
 //instrument: Instrument = new Instrument();
  instruments: Instrument[]; //un tableau de Instrument
 //un tableau de Instrument
 //apiURL: string = 'http://localhost:8080/instruments/api';
 constructor() {
  this.instruments = [
  { idInstrument : 1, nomInstrument : "Violon", prixInstrument : 400},
  { idInstrument : 2, nomInstrument : "Piano", prixInstrument : 330},
  { idInstrument : 3, nomInstrument :"Guitare", prixInstrument : 200}
];
  }
  


  

listeInstruments():Instrument[] {
return this.instruments;
}
ajouterInstrument( instr: Instrument){
this.instruments.push(instr);
}

supprimerInstrument( instr: Instrument){
  //supprimer le produit prod du tableau produits
  const index = this.instruments.indexOf(instr, 0);
  if (index > -1) {
  this.instruments.splice(index, 1);
  }
  //ou Bien
  /* this.produits.forEach((cur, index) => {
  if(prod.idProduit === cur.idProduit) {
  this.produits.splice(index, 1);
  }
  }); */
  }/*
 consulterInstrument(id:number): Instrument{
 return this.instrument.find((instr: { idInstrument: number; }) => instr.idInstrument == id);
  
    }*/
    trierInstruments(){
      this.instruments = this.instruments.sort((n1,n2) => {
      if (n1.idInstrument > n2.idInstrument) {
      return 1;
      }
      if (n1.idInstrument < n2.idInstrument) {
      return -1;
      }
      return 0;
      });
      }
      
    
  updateInstrument(p:Instrument)
{
// console.log(p);
this.supprimerInstrument(p);
this.ajouterInstrument(p);
this.trierInstruments();

}


}
