// import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { GetServerSideProps } from 'next'

// import { mocks } from './Dashboard.mocks'
import { IDashboardServerSideProps } from './Dashboard.types'

import { config } from '~/config'
import { ROUTES } from '~/constants'
import { is404 } from '~/utils'

export const getServerSideProps: GetServerSideProps<IDashboardServerSideProps> = async () => {
  // const supabase = createServerSupabaseClient(ctx)
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession()

  // console.log({ session })

  if (config.USE_MOCKS) {
    return { props: {} }
  }

  return { props: {} }

  try {
    // const res = await fetch(`${config.API_URL}/api/hello`)
    // return { props: { hello: await res.json() } }
  } catch (e) {
    console.log({ e })

    if (is404(e)) {
      return { notFound: true }
    }

    return {
      redirect: {
        destination: ROUTES.ERROR,
        permanent: false,
      },
    }
  }
}
