import s from "./Profile.module.css"
import { BottomNav } from "../../../widgets/bottom-nav"
import exit from "/exit.svg"

export const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.profileCard}>
        <img src="https://avatars.mds.yandex.net/i?id=f036350b4d65a1c5a9458edbc4bfecfa6772e014-5878122-images-thumbs&n=13 " alt="Profile" className={s.avatar} />
        <div className={s.name}>Ilya Chernov</div>
        <div className={s.infoBlock}>
          <span className={s.label}>Email</span>
          <span className={s.value}>ilacher2025@mail.ru</span>
        </div>
        <div className={s.infoBlock}>
          <span className={s.label}>Телефон</span>
          <span className={s.value}>+79333333</span>
        </div>
        <div className={s.infoBlock}>
          <span className={s.label}>Пользуюсь Decidium с</span>
          <span className={s.value}>3/3/2025</span>
        </div>
        <button className={s.logoutBtn}>
            <div className={s.logoutBtnContent}>
                <img src={exit} alt="Выход" className={s.logoutIcon} />
                <span>Выйти</span>
            </div>
        </button>
      </div>
      <BottomNav selected="profile" />
    </div>
  )
}
