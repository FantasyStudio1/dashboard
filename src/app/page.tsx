import { Suspense } from 'react'
import { IoTicketOutline } from 'react-icons/io5'

import { AnalyticsItem, AnalyticsItemLoader } from '@/components/analytics-item'
import { PageTitle, SectionContainer } from '@/components/common'
import { DonutChart } from '@/components/donut-chart'
import { RevenueChart } from '@/components/revenue-chart'
import { Users } from '@/components/users'

import s from './dashboard.module.scss'
import ExportsButton from './exports-button'

export default function Home() {
  return (
    <div>
      <PageTitle title='Dashboard' description={`Here's your analytic detail`}>
        <ExportsButton />
      </PageTitle>
      <div className={s.mainContent}>
        <div className={s.firstRow}>
          <div className={s.analyticsGrid}>
            <Suspense fallback={<AnalyticsItemLoader />}>
              <AnalyticsItem title='Total Sales' Icon={<IoTicketOutline />} range={[5000, 28000]} />
            </Suspense>
            <Suspense fallback={<AnalyticsItemLoader />}>
              <AnalyticsItem title='Total Orders' Icon={<IoTicketOutline />} range={[10, 1000]} />
            </Suspense>
            <Suspense fallback={<AnalyticsItemLoader />}>
              <AnalyticsItem title='Visitors' Icon={<IoTicketOutline />} range={[10000, 100000]} />
            </Suspense>
            <Suspense fallback={<AnalyticsItemLoader />}>
              <AnalyticsItem title='Refunded' Icon={<IoTicketOutline />} range={[50, 100]} />
            </Suspense>
          </div>
          <SectionContainer className={s.revenue}>
            <RevenueChart />
          </SectionContainer>
        </div>
        <div className={s.secondRow}>
          <SectionContainer style={{ flex: 1 }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Users />
            </Suspense>
          </SectionContainer>
          <SectionContainer className={s.donutChartContainer}>
            <DonutChart />
          </SectionContainer>
        </div>
      </div>
    </div>
  )
}
