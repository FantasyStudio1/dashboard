'use client'

import { useState } from 'react'
import useMeasure from 'react-use-measure'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { SectionTitle } from '@/components/common'
import { Select, SelectItem } from '@/components/primitives'
import { revenueChartData } from '@/components/revenue-chart/data'

import s from './revenue-chart.module.scss'

type FilterNames = 'month' | 'week' | 'day'

export default function RevenueChart() {
  const [filterName, setFilterName] = useState<string>('month')
  const [chartContainerRef, { width: containerWidth }] = useMeasure()

  return (
    <div>
      <SectionTitle title='Revenue'>
        <Select
          value={filterName}
          onValueChange={value => setFilterName(value!)}
          triggerValue={revenueChartData[filterName as FilterNames].name}
        >
          <SelectItem value='month'>Month</SelectItem>
          <SelectItem value='week'>Week</SelectItem>
          <SelectItem value='day'>Day</SelectItem>
        </Select>
      </SectionTitle>
      <figure className={s.chart} ref={chartContainerRef}>
        <ResponsiveContainer>
          <BarChart className={s.chart} data={revenueChartData[filterName as FilterNames].data}>
            <YAxis
              className={s.YAxis}
              fill=''
              stroke=''
              axisLine={false}
              tickLine={false}
              interval='preserveStartEnd'
              tick={{ transform: 'translate(-22.5, 0)' }}
              type='number'
              // При ширине меньше 460px перестаёт влезать,поэтому скрываем
              hide={containerWidth < 460}
            />
            <XAxis
              className={s.XAxis}
              dataKey='name'
              fill=''
              stroke=''
              tickLine={false}
              axisLine={false}
              interval='preserveStartEnd'
              tick={{ transform: 'translate(0, 6)' }}
              // При ширине меньше 460px перестаёт влезать,поэтому скрываем
              hide={containerWidth < 460}
            />
            <Tooltip
              isAnimationActive={false}
              wrapperStyle={{ outline: 'none' }}
              cursor={{ fill: '#d1d5db', opacity: '0.15' }}
              contentStyle={{ fontSize: 13 }}
              itemStyle={{ padding: 0 }}
            />
            <Legend verticalAlign='top' align='right' wrapperStyle={{ fontSize: 13 }} />
            <CartesianGrid className={s.gridLine} vertical={false} strokeDasharray='10 10' />
            <Bar dataKey='Profit' fill='var(--purple)' />
            <Bar dataKey='Loss' fill='var(--pink)' />
          </BarChart>
        </ResponsiveContainer>
      </figure>
    </div>
  )
}
