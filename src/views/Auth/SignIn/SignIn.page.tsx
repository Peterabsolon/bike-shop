import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { observer } from 'mobx-react-lite'
import { GetServerSidePropsContext } from 'next'
import React from 'react'

import { ROUTES } from '~/constants'
import { app } from '~/store'

// import { ROUTES } from '~/constants'

export const SignInPage = observer(() => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Sign in</h1>

      <button onClick={app.auth.loginWithGithub}>Github login</button>
    </div>
  )
})

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    // Forward if logged in already
    const supabase = createServerSupabaseClient(ctx)
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (session) {
      return { redirect: { destination: ROUTES.DASHBOARD } }
    }

    console.log({ session })

    return { props: {} }
  } catch (e) {
    console.log({ e })
  }

  // const providers = await getProviders()

  return {
    props: { providers: [] },
  }
}
