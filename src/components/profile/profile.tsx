import Image from 'next/image'

import NotificationButton from './notification-button'
import s from './profile.module.scss'
import SettingsButton from './settings-button'

// todo: Можно было бы добавить загрузку случайного пользователя

export default function Profile() {
  return (
    <div className={s.row}>
      <NotificationButton />
      <div role='separator' aria-orientation='vertical' />
      <div className={s.profileInfo}>
        <div className={s.profile}>
          <Image
            src='/user-pfp.png'
            alt='User Profile Picture'
            title='User Profile Picture'
            width={36}
            height={36}
            quality={100}
          />
          <div>
            <div className={s.username}>Username</div>
            <div className={s.store}>Store name</div>
          </div>
        </div>
      </div>
      <SettingsButton />
    </div>
  )
}
