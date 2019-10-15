import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.scss']
})
export class LoanStatusComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    private sharedService: SharedService) { }
  public loanNumber: string = '';
  public loanDetails: any;
  public isDataFetched: boolean = false;
  ngOnInit() {
  }
  checkLoanStatus() {
    this.isDataFetched = false;
    this.sharedService.getLoanStatus(+this.loanNumber).subscribe(res => {
      this.loanDetails = res;
      this.isDataFetched = true;
    }, error => {
      this.isDataFetched = false;
    });
  }
}
