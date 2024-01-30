'use server'

const sleep = () => new Promise(resolve => setTimeout(resolve, 200))

export async function submitSetting(prevState: any, formData: FormData) {
  const check = formData.get('checkbox')

  // Получаем случайное число от 0 до 9 и в зависимости от него выдаём ошибку
  const error = Math.random() * 10 > 8.5 ? 'Failed to save changes' : null

  // Намеренно задерживаю ответ, чтобы имитировать запрос данных
  return await sleep().then(() => {
    return {
      isChecked: check === 'on',
      error: error
    }
  })
}
