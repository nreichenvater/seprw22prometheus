import React from 'react'
import Head from 'next/head'
import withAuth from '../components/withAuth'
import router from 'next/router'

const index = () => {
  return (
    <>
      <Head>
        <title>SE PR Prometheus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="indexbody">
        <div className="indextext">you are logged in</div>
        <div className="button" onClick={() => {localStorage.clear(); router.push("/login")}}>log out</div>
      </div>
    </>
  )
}

export default withAuth(index)