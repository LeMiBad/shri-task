import { FC } from "react"
import Button from "../Button/Button"


interface Props {
  mainFunc: () => void
  exit: () => void
  title?: string
}





const ModalForDelete:FC<Props> = ({ mainFunc, exit, title }) => {

  const yesClickHandler = () => {
    mainFunc()
    exit()
  }

  return (
    <>
      <br/>
      <p>{title || "Вы уверены что хотите удалить билет?"}</p>
      <br/>
      <div style={{ display: "flex", gap: 10}}>
        <Button onClick={yesClickHandler} variant="default">Да</Button>
        <Button onClick={exit} variant="outlined">Нет</Button>
      </div>
    </>
  )
}

export default ModalForDelete