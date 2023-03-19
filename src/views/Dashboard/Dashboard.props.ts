import { GetServerSideProps } from 'next'

import { config } from '~/config'
import { ROUTES } from '~/constants'
import { is404 } from '~/utils'

import { IDashboardServerSideProps } from './Dashboard.types'

export const getServerSideProps: GetServerSideProps<IDashboardServerSideProps> = async () => {
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
