import { Component, OnInit } from '@angular/core';
import { Instrument } from '../model/instrument.model';
import { InstrumentService } from '../services/instrument.service';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-update-instrument',
  templateUrl: './update-instrument.component.html',
  styles: [
  ]
})
export class UpdateInstrumentComponent implements OnInit {
  currentInstrument = new Instrument();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private instrumentService: InstrumentService) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params.id);
//this.currentInstrument = this.instrumentService.consulterInstrument(this.activatedRoute.snapshot.params.id);
 console.log(this.currentInstrument);
 this.instrumentService.consulterInstrument(this.activatedRoute.snapshot.params.id).subscribe( prod =>{ this.currentInstrument = prod; } ) ;

  }

  updateInstrument() {
    this.instrumentService.updateInstrument(this.currentInstrument).subscribe(() => {
    this.router.navigate(['instruments']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
    }

}
