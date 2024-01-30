import { ComponentProps, ReactNode } from 'react'
import { ImSpinner4 } from 'react-icons/im'
import { RxArrowBottomRight, RxArrowRight, RxArrowTopRight } from 'react-icons/rx'

import { SectionContainer } from '@/components/common'

import s from './analytics-item.module.scss'
import SettingButton from './settings-button'

interface AnalyticsItemProps extends ComponentProps<'div'> {
  title: string
  Icon: ReactNode
  range: number[]
}

export default async function AnalyticsItem(props: AnalyticsItemProps) {
  const { children, Icon, title, range, ...itemProps } = props

  // Намеренно задерживаю ответ, чтобы имитировать медленный запрос данных
  const values = await sleep().then(() => fetchRandomNumbers(range))
  const formattedValues = Array.from(values.map(value => value.toLocaleString('en-US')))

  const isProfitable = values[1] > range[1] / 2
  const bucks = title === 'Total Sales' ? '$' : ''
  const minusOrPlus = isProfitable ? '+' : '-'

  return (
    <SectionContainer className={s.root} {...itemProps}>
      <div className={s.heading}>
        <div className={s.name}>
          <div data-icon>{Icon}</div>
          <div data-title>{title}</div>
        </div>
        <SettingButton />
      </div>
      <div className={s.content}>
        <div data-main-value>{`${bucks}${formattedValues[0]}`}</div>
        <div className={s.row}>
          <div className={s.percentProfit} data-profit={isProfitable}>
            {isProfitable ? <RxArrowTopRight aria-hidden /> : <RxArrowBottomRight aria-hidden />}
            <div>{`${formattedValues[1]}`}</div>
          </div>
          <div className={s.valueProfit}>{`${minusOrPlus}${bucks}${formattedValues[2]}`}</div>
        </div>
      </div>
      <button type='button' className={s.viewButton}>
        View report
        <RxArrowRight aria-hidden />
      </button>
    </SectionContainer>
  )
}

/* -------------------------------------------------------------------------------------------------
 * Loader
 * -----------------------------------------------------------------------------------------------*/

export function AnalyticsItemLoader() {
  return (
    <SectionContainer className={s.loader} aria-live='polite' aria-busy>
      <ImSpinner4 />
    </SectionContainer>
  )
}

/* ---------------------------------------------------------------------------------------------- */

const sleep = () => new Promise(resolve => setTimeout(resolve, 600))

async function fetchRandomNumbers(range: number[]): Promise<number[]> {
  const res = await fetch(
    `http://www.randomnumberapi.com/api/v1.0/random?min=${range[0]}&max=${range[1]}&count=3`,
    // Специально отключаю кэширование
    { cache: 'no-store' }
  )

  return res.json()
}
