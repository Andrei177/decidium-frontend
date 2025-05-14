import s from "./Profile.module.css"
import exit from "/exit.svg"
import { useUserStore } from "../../../entities/user"
import { logout } from "../../../features/auth"
import { useNavigate } from "react-router-dom"
import { Routes } from "../../../shared"
import { AppLayout } from "../../../widgets/app-layout"

export const Profile = () => {

  const { avatar_image, first_last_middle_name, email, phone_number, created_at } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(res => {
        console.log("Ответ при выходе из аакаунта", res)
        navigate(Routes.ROOT)
      })
      .catch(err => {
        console.error("Ошибка при выходе из аккаунта", err)
      })
  }

  return (
    <AppLayout currentPage="profile">
      <div className={s.profileCard}>
        {avatar_image && <img src={avatar_image} alt="Profile" className={s.avatar} />}
        <div className={s.name}>{first_last_middle_name}</div>
        <div className={s.infoBlock}>
          <span className={s.label}>Email</span>
          <span className={s.value}>{email}</span>
        </div>
        <div className={s.infoBlock}>
          <span className={s.label}>Телефон</span>
          <span className={s.value}>{phone_number}</span>
        </div>
        <div className={s.infoBlock}>
          <span className={s.label}>Пользуюсь Decidium с</span>
          <span className={s.value}>{created_at && new Date(created_at).toISOString()}</span>
        </div>
        <button onClick={handleLogout} className={s.logoutBtn}>
          <div className={s.logoutBtnContent}>
            <img src={exit} alt="Выход" className={s.logoutIcon} />
            <span>Выйти</span>
          </div>
        </button>
      </div>
    </AppLayout>
  )
}
