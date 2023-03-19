import { createBrowserSupabaseClient, SupabaseClient } from '@supabase/auth-helpers-nextjs'
import { makeAutoObservable } from 'mobx'

// import { Session } from 'next-auth'
// import { getSession, signOut } from 'next-auth/react'
import { TABLES } from '~/constants/tables'

export class AppStore {
  // ====================================================
  // Model
  // ====================================================
  // supabase: SupabaseClient
  supabase: SupabaseClient

  // session?: Session | null = null

  // ====================================================
  // Constructor
  // ====================================================
  constructor() {
    makeAutoObservable(this)

    this.supabase = createBrowserSupabaseClient()
  }

  // ====================================================
  // Public
  // ====================================================
  init = async () => {
    // this.session = await getSession()

    const brands = await this.supabase.from(TABLES.BRANDS).select()
    console.log({ brands })
  }

  loginWithGithub = async () => {
    const { data, error } = await this.supabase.auth.signInWithOAuth({
      provider: 'github',
    })

    console.log({ data, error })
  }

  logout = async () => {
    try {
      this.supabase.auth.signOut()
    } catch (e) {
      console.log({ e })
    }
  }
}

export const app = new AppStore()
