import { createBrowserSupabaseClient, SupabaseClient } from '@supabase/auth-helpers-nextjs'
import { makeAutoObservable } from 'mobx'

import { TABLES } from '~/constants/tables'

import { AuthStore } from './services/Auth.store'

export class AppStore {
  // ====================================================
  // Model
  // ====================================================
  supabase: SupabaseClient

  auth: AuthStore

  // ====================================================
  // Constructor
  // ====================================================
  constructor() {
    makeAutoObservable(this)

    this.supabase = createBrowserSupabaseClient()

    this.auth = new AuthStore(this)
  }

  // ====================================================
  // Public
  // ====================================================
  init = async () => {
    const brands = await this.supabase.from(TABLES.BRANDS).select()
    console.log({ brands })
  }
}

export const app = new AppStore()
