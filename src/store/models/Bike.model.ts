import { makeAutoObservable } from 'mobx'

export class BikeModel {
  constructor() {
    makeAutoObservable(this)
  }
}
