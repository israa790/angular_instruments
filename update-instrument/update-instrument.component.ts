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
  }

  updateInstrument()
{ //console.log(this.currentInstrument);
this.instrumentService.updateInstrument(this.currentInstrument);
this.router.navigate(['instruments']);
}

}
