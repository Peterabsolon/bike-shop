import { Session, Subscription } from '@supabase/supabase-js'
import { makeAutoObservable } from 'mobx'

import { ROUTES } from '~/constants'

import type { AppStore } from '../app.store'

export class AuthStore {
  // ====================================================
  // Model
  // ====================================================
  session?: Session = undefined

  watchLoginSub?: Subscription
  watchLogoutSub?: Subscription

  // ====================================================
  // Constructor
  // ====================================================
  constructor(readonly app: AppStore) {
    makeAutoObservable(this)
  }

  redirectToDashboardWhenSessionReady = () => {
    const watcher = this.app.supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        this.session = session
        window.location.pathname = ROUTES.DASHBOARD
      }
    })

    this.watchLoginSub = watcher.data.subscription
  }

  redirectToSignInWhenSesssionDestroyed = () => {
    const watcher = this.app.supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!session) {
        window.location.pathname = ROUTES.SIGNIN
      }
    })

    this.watchLogoutSub = watcher.data.subscription
  }

  loginWithGithub = async () => {
    const { error } = await this.app.supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.host}/auth/signin`,
      },
    })

    // TODO: Notification
    if (error) alert(error)

    this.redirectToDashboardWhenSessionReady()
  }

  logout = async () => {
    try {
      this.watchLoginSub?.unsubscribe()
      this.redirectToSignInWhenSesssionDestroyed()
      await this.app.supabase.auth.signOut()
    } catch (e) {
      // TODO: Notification
      if (e) alert(e)
    }
  }
}
