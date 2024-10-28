import { PageHeader } from '@/components/common/page-header/page-header'
import { Spacer } from '@/components/common/spacer/spacer'
import React from 'react'
import { DashboardNavigation } from '../../components/dashboard/home/dasboard-navigation'


const Page = () => {
  return (
    <>
      <PageHeader/>
      <Spacer/>
      <DashboardNavigation/>
      <Spacer/>
      
    </>
  )
}

export default Page