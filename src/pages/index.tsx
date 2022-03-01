import { NextPage } from 'next'

import Head from 'next/head'
import { Main } from '@layouts/Main'
import { Form } from '@components/Form'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Home | Challenge Skydrops</title>
    </Head>
    <Main>
      <Form />
    </Main>
  </>
)

export default Home
