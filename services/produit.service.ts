import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : Produit[];  
  constructor() {
    this.produits=[         
      {idProduit : 1, nomProduit : "PC Asus", prixProduit: 3000.600,dateCreation : new Date("01/14/2011")},
      {idProduit : 2, nomProduit : "Imprimante Eepson", prixProduit: 400,dateCreation : new Date("05/12/2020")},
      {idProduit : 3, nomProduit : "Tablette Sumsung", prixProduit: 700,dateCreation : new Date("03/20/2015")}
          ];
   }

   listeProduits():Produit[]{//elle va retourner un tab de produit
     return this.produits;
   }
   ajouterProduit(prod : Produit)
   {
     this.produits.push(prod);
   }
}
