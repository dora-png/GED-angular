import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  messageSub: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  isloggingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  /**
   * Contains in-progress loading requests
   */
  loadingMap: Map<string, boolean> = new Map<string, boolean>();
  messageMap: Map<string, string | null> = new Map<string, string | null>();
  loggingMap: Map<string, boolean> = new Map<string, boolean>();

  constructor() { }
  /*
  setMessage(message: string | null, url: string): void {
    if (!url) {
      throw new Error('The request URL must be provided to the LoggingService.setLogging function');
    }
    if (message === null) {
      this.messageMap.set(url, message);
      this.messageSub.next(null);
    }else if (logging === false && this.loggingMap.has(url)) {
      this.loggingMap.delete(url);
    }
    if (this.loggingMap.size === 0) {
      this.isloggingSub.next(false);
    }
  }*/

  setLogging(logging: boolean, url: string): void {
    if (!url) {
      throw new Error('The request URL must be provided to the LoggingService.setLogging function');
    }
    if (logging === true) {
      this.loggingMap.set(url, logging);
      this.isloggingSub.next(true);
    }else if (logging === false && this.loggingMap.has(url)) {
      this.loggingMap.delete(url);
    }
    if (this.loggingMap.size === 0) {
      this.isloggingSub.next(false);
    }
  }

  setLoading(loading: boolean, url: string): void {
    if (!url) {
      throw new Error('The request URL must be provided to the LoadingService.setLoading function');
    }
    if (loading === true) {
      this.loadingMap.set(url, loading);
      this.loadingSub.next(true);
    }else if (loading === false && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }
    if (this.loadingMap.size === 0) {
      this.loadingSub.next(false);
    }
  }
}
