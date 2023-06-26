import React from 'react'
import TabBar from '@/components/Event/TabBar'

type SummaryParamsType = {
  params: { id: string }
  children: React.ReactNode
}

function Layout({ params, children }: SummaryParamsType) {
  return (
    <>
      {children}
    </>
  )
}

export default Layout
