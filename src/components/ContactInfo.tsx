import {
  Icon24LocationMapOutline,
  Icon24MailOutline,
  Icon24PhoneOutline,
} from '@vkontakte/icons'

import map from '@/assets/images/map.png'

export const ContactInfo = () => {
  return (
    <div className="text-x-white pb-8 px-2 flex flex-col lg:flex-row justify-center align-middle lg:justify-evenly gap-4">
      <div>
        <div className="flex justify-center">
          <img className="max-w-[750px] w-full shadow-lg rounded" src={map} alt="map" />
        </div>
      </div>
      <div className="self-center">
        <p>Свяжитесь с нами удобным для Вас способом, будем рады сотрудничеству!</p>
        <div className="h-1 w-1/4 bg-x-red my-4" />
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Icon24PhoneOutline />
            <div>
              <p>Звоните по номеру:</p>
              <p>+7 (913) 756-72-10</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Icon24LocationMapOutline />
            <div>
              <p>Мы находимся по адресу:</p>
              <p>г. Новосибирск, ул. Фабричная, д.4</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Icon24MailOutline />
            <div>
              <p>Для писем и предложений:</p>
              <p>info@novakdecor-nsk.ru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
