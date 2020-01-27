import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  isDateInPast(date: moment.Moment): boolean {
    return date.diff(moment(), 'days') < 0;
  }

  format(date: string, dateFormat = 'YYYY/MM/DD') {
    if (!date) { return ''; }
    return moment(date).format(dateFormat);
  }
}