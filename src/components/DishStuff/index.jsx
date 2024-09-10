import { PiX, PiPlus } from ' react-icons/pi'

import { Container } from './styles'

export function DishStuff({ isNew, value, onClick, ...rest }) {
  return(
    <Container
      $isnew={isNew}
    >
      <input
        type='text'
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type='button'
        onClick={onClick}
        className={isNew ? 'btn-add' : 'btn-del'}
      >
        { isNew ? <PiPlus/> : <PiX/>}
      </button>
    </Container>
  )
}