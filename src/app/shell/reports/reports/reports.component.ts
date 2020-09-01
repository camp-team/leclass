import { Component, OnInit } from '@angular/core';
import { ReportGetService } from 'src/app/services/report-get.service';
import { Report } from 'src/app/interfaces/report';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  reports: Report[];

  constructor(
    private reportGetService: ReportGetService
  ) {
    this.reportGetService.getReports().pipe(take(1)).subscribe((reports: Report[]) => {
      this.reports = reports;
    });
  }

  ngOnInit(): void {
  }

}
