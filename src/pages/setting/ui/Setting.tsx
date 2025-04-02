import { ChangeEvent, useRef, useState } from "react"
import FormWrapper from "../../../shared/form-wrapper/FormWrapper"
import Button from "../../../shared/ui/button/Button"
import Input from "../../../shared/ui/input/Input"
import s from "./Setting.module.css"

export const Setting = () => {

    const [imgUrl, setImgUrl] = useState<string>("");

    const inputRef = useRef<HTMLInputElement>(null);

    const handleUploadPhoto = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }
    const handleOriginUploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.table(e.target.files[0]);
            console.log("Это фото будет загружено");
            setImgUrl(URL.createObjectURL(e.target.files[0]));
        }
    }

    return (
        <FormWrapper>
            <form className={s.form}>
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
                    <Input type="tel" placeholder="Введите телефон..." className={s.inp} />
                </div>
                <Button
                    className={s.btn}
                    onClick={e => e.preventDefault()}
                >
                    Сохранить
                </Button>
            </form>
        </FormWrapper>
    )
}
