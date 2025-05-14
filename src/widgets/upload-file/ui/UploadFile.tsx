import { ChangeEvent, useRef } from "react"
import s from "./UploadFile.module.css"

interface IUploadFile {
    file: Blob | null,
    setFile: (file: Blob) => void
}

export const UploadFile = ({ file, setFile }: IUploadFile) => {

    const ref = useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        if (ref.current) {
            ref.current.click();
        }
    }
    const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    return (
        <div className={s.photo}>
            {!file && <div className={s.photo_file_face} onClick={handleClick}>Выбрать фото</div>}
            <input
                ref={ref}
                onChange={handleUpload}
                type="file"
                className={s.photo_file}
                name="file"
                accept="image/*"
            />
            {!!file && <div className={s.uploaded_img_wrap} onClick={handleClick}>
                <img src={URL.createObjectURL(file)} className={s.uploaded_img} />
            </div>}
        </div>
    )
}
