import { makeAutoObservable } from 'mobx'

export class BrandModel {
  constructor() {
    makeAutoObservable(this)
  }
}
