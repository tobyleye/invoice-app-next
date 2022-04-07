import type { NextPage } from 'next'
import PageLayout from '../components/PageLayout'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <div className='h-screen grid place-items-center'>
        <h3 className="text-3xl font-bold text-green-800">Hello world</h3>
      </div>
    </PageLayout>
  )
}

export default Home
