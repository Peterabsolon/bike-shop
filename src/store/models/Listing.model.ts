import { makeAutoObservable } from 'mobx'

export class ListingModel {
  constructor() {
    makeAutoObservable(this)
  }
}
