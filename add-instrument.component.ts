import { Component, OnInit } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { InstrumentService } from '../services/instrument.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.css']
})
export class AddInstrumentComponent implements OnInit {
newInstrument = new Instrument();
  message: string="";
constructor(private instrumentService: InstrumentService,
            private router :Router) { }

addInstrument(){
//console.log(this.newInstrument);
 this.instrumentService.ajouterInstrument(this.newInstrument).subscribe(prod => {
  console.log(prod);
  });
  this.router.navigate(['instruments']).then(() => {window.location.reload();
});
}
  ngOnInit(): void {
  }

}
