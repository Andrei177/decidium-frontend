import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { FormWrapper, Input, Button, Routes, Loader } from "../../../shared";
import s from "./Setting.module.css"
import { useFormStore, signup } from "../../../features/auth";
import { useNavigate } from "react-router-dom";

export const Setting = () => {

    const navigate = useNavigate();

    const [imgUrl, setImgUrl] = useState<string>("");

    const inputRef = useRef<HTMLInputElement>(null);

    const formStore = useFormStore();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleUploadPhoto = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }
    const handleOriginUploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.table(e.target.files[0]);
            console.log("Это фото будет загружено");

            formStore.setFormData({
                ...formStore,
                avatar: e.target.files[0]
            })

            setImgUrl(URL.createObjectURL(e.target.files[0]));
        }
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setIsLoading(true);
        signup(formStore.email, formStore.password, formStore.fio, formStore.role, formStore.phoneNumber, formStore.avatar)
        .then(res => {
            console.log("ответ при регистрации", res)
            navigate(Routes.PROFILE)
        })
        .catch(err => {
            console.error("Ошибка при регистрации", err)
        })
        .finally(() => setIsLoading(false))
    }

    return (
        <FormWrapper>
            <form className={s.form} onSubmit={handleSubmit}>
            {isLoading && <div className={s.loader_wrap}><Loader/></div>}
                <h1 className={s.title}>Настройка профиля</h1>
                <div className={s.photo_wrap}>
                    <label htmlFor="file">Фото профиля</label>
                    <div className={s.photo}>
                        {!imgUrl && <div className={s.photo_file_face} onClick={handleUploadPhoto}>Выбрать фото</div>}
                        <input
                            ref={inputRef}
                            onChange={handleOriginUploadPhoto}
                            type="file"
                            className={s.photo_file}
                            name="file"
                            accept="image/*"
                        />
                        {!!imgUrl && <div className={s.uploaded_img_wrap} onClick={handleUploadPhoto}><img src={imgUrl} className={s.uploaded_img}/></div>}
                    </div>
                </div>
                <div className={s.inp_wrap}>
                    <label>Телефон</label>
                    <Input 
                    type="tel" 
                    placeholder="Введите телефон..." 
                    className={s.inp} 
                    value={formStore.phoneNumber}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => formStore.setPhoneNumber(e.target.value)}
                    />
                </div>
                <Button
                    className={s.btn}
                >
                    Сохранить
                </Button>
            </form>
        </FormWrapper>
    )
}
