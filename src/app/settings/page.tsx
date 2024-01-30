import { PageTitle } from '@/components/common'
import { SettingsField } from '@/components/settings-field'

import ImportButton from './import-button'
import s from './settings.module.scss'

export default function Settings() {
  return (
    <div>
      <PageTitle title='Settings' description='Change your settings any time'>
        <ImportButton />
      </PageTitle>
      <div className={s.grid}>
        <SettingsField label='Get notifications about teams' />
        <SettingsField label='Allow creating multiple seasons' isChecked={false} />
        <SettingsField label='Aliquam, doloremque, enim illo ipsa libero magnam minima' />
        <SettingsField label='Double Authentications' isChecked={false} />
        <SettingsField label='Enable proxy' />
        <SettingsField label='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet corporis debitis eius, magni non qui repellendus' />
      </div>
    </div>
  )
}
