import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  getSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  postSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  putSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  delSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  refreshSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isloggingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  /**
   * Contains in-progress loading requests
   */
  getMap: Map<string, boolean> = new Map<string, boolean>();
  postMap: Map<string, boolean> = new Map<string, boolean>();
  putMap: Map<string, boolean> = new Map<string, boolean>();
  delMap: Map<string, boolean> = new Map<string, boolean>();
  refreshMap: Map<string, boolean> = new Map<string, boolean>();
  loggingMap: Map<string, boolean> = new Map<string, boolean>();

  constructor() { }

  setRefreshLoading(refresh: boolean, url: string): void {
    if (!url) {
      throw new Error('The request URL must be provided to the LoadingService.setLoading function');
    }
    if (refresh === true) {
      this.refreshMap.set(url, refresh);
      this.refreshSub.next(true);
    }else if (refresh === false && this.refreshMap.has(url)) {
      this.refreshMap.delete(url);
    }
    if (this.refreshMap.size === 0) {
      this.refreshSub.next(false);
    }
  }
  
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

  setGetLoading(get: boolean, url: string): void {
    if (!url) {
      throw new Error('The request URL must be provided to the LoadingService.setLoading function');
    }
    if (get === true) {
      this.getMap.set(url, get);
      this.getSub.next(true);
    }else if (get === false && this.getMap.has(url)) {
      this.getMap.delete(url);
    }
    if (this.getMap.size === 0) {
      this.getSub.next(false);
    }
  }

  setPostLoading(post: boolean, url: string): void {
    if (!url) {
      throw new Error('The request URL must be provided to the LoadingService.setLoading function');
    }
    if (post === true) {
      this.postMap.set(url, post);
      this.postSub.next(true);
    }else if (post === false && this.postMap.has(url)) {
      this.postMap.delete(url);
    }
    if (this.postMap.size === 0) {
      this.postSub.next(false);
    }
  }
  setPutLoading(put: boolean, url: string): void {
    if (!url) {
      throw new Error('The request URL must be provided to the LoadingService.setLoading function');
    }
    if (put === true) {
      this.putMap.set(url, put);
      this.putSub.next(true);
    }else if (put === false && this.putMap.has(url)) {
      this.putMap.delete(url);
    }
    if (this.putMap.size === 0) {
      this.putSub.next(false);
    }
  }
  setDelLoading(del: boolean, url: string): void {
    if (!url) {
      throw new Error('The request URL must be provided to the LoadingService.setLoading function');
    }
    if (del === true) {
      this.delMap.set(url, del);
      this.delSub.next(true);
    }else if (del === false && this.delMap.has(url)) {
      this.delMap.delete(url);
    }
    if (this.delMap.size === 0) {
      this.delSub.next(false);
    }
  }
}
