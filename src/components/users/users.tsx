'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { ImSpinner4 } from 'react-icons/im'
import useSWR from 'swr'

import { SectionTitle } from '@/components/common'

import s from './users.module.scss'

const fetcher = (...args: any) => fetch(args).then(res => res.json())

type User = {
  id: number
  email: string
  firstName: string
  lastName: string
  phone: string
}

type Response = {
  users: User[]
}

export default function Users() {
  const searchParams = useSearchParams()
  const queryParam = searchParams.get('query')

  const { isLoading, data } = useSWR<Response>(
    !queryParam
      ? `https://dummyjson.com/users?limit=10`
      : `https://dummyjson.com/users/search?q=${queryParam}&limit=10`,
    fetcher,
    {
      // Включаем, чтобы при загрузке нового запроса не пропадали покупатели
      keepPreviousData: true
    }
  )

  return (
    <div className={s.root}>
      <SectionTitle title='Recent Activity'>
        <div className={s.topSearch}>
          <SearchInput isLoading={isLoading} />
        </div>
      </SectionTitle>
      <div className={s.bottomSearch}>
        <SearchInput isLoading={isLoading} />
      </div>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead className={s.head}>
            <tr className={s.row}>
              <th className={s.cell}>Customer</th>
              <th className={s.cell}>Email</th>
              <th className={s.cell}>Phone</th>
            </tr>
            <tr hidden />
          </thead>
          <tbody className={s.body}>
            {data?.users.map(user => (
              <tr key={user.id} className={s.row}>
                <td className={s.cell}>{`${user.firstName} ${user.lastName}`}</td>
                <td className={s.cell}>{user.email}</td>
                <td className={s.cell}>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SearchInput({ isLoading }: { isLoading: boolean }) {
  const [isHydrated, setIsHydrated] = useState<boolean>(false)

  const searchParams = useSearchParams()
  const newParams = new URLSearchParams(searchParams.toString())
  const defaultValue = searchParams.get('query') ?? ''

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <div className={s.inputWrap}>
      {isLoading ? <ImSpinner4 data-spin /> : <CiSearch />}
      <input
        type='text'
        defaultValue={defaultValue}
        autoComplete='off'
        autoCorrect='off'
        spellCheck='false'
        placeholder='Search customers...'
        disabled={!isHydrated}
        onChange={e => {
          if (e.target.value === '') {
            window.history.replaceState(null, '', '/')
            return
          }

          newParams.set('query', e.target.value)
          window.history.pushState(null, '', `?${newParams.toString()}`)
        }}
      />
    </div>
  )
}
