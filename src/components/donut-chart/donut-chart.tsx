'use client'

import { useState } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

import { SectionTitle } from '@/components/common'
import { donutChartData } from '@/components/donut-chart/data'
import { Select, SelectItem } from '@/components/primitives'

import s from './donut-chart.module.scss'

const COLORS = ['var(--purple)', 'var(--pink)', '#B4A3D8']
type FilterNames = 'allTime' | 'week' | 'month'

export default function DonutChart() {
  const [filterName, setFilterName] = useState<string>('allTime')

  return (
    <div>
      <SectionTitle title='Traffic Chanel'>
        <Select
          value={filterName}
          onValueChange={value => setFilterName(value!)}
          triggerValue={donutChartData[filterName as FilterNames].name}
        >
          <SelectItem value='allTime'>All Time</SelectItem>
          <SelectItem value='month'>Month</SelectItem>
          <SelectItem value='week'>Week</SelectItem>
        </Select>
      </SectionTitle>
      <figure className={s.donutContainer}>
        <ResponsiveContainer>
          <PieChart tabIndex={-1}>
            <Legend wrapperStyle={{ fontSize: 13 }} />
            <Tooltip
              isAnimationActive={false}
              wrapperStyle={{ outline: 'none' }}
              cursor={{ fill: '#d1d5db', opacity: '0.15' }}
              contentStyle={{ fontSize: 13 }}
              itemStyle={{ padding: 0 }}
            />
            <Pie
              data={donutChartData[filterName as FilterNames].data}
              cx='50%'
              cy='50%'
              innerRadius={75}
              fill='#8884d8'
              dataKey='value'
              animationBegin={0}
              animationDuration={200}
              label
            >
              {donutChartData[filterName as FilterNames].data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  stroke=''
                  fill={COLORS[index % COLORS.length]}
                  style={{ outline: 'none' }}
                  tabIndex={-1}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </figure>
    </div>
  )
}
