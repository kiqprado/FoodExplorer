import { PiUploadSimple } from 'react-icons/pi'

import { Container } from './styles'

export function InputImg({ title, ...rest }) {
  return(
    <Container>
      <label htmlFor="imageDish">
        <PiUploadSimple/>
        {title}
        
        <input
          id="imageDish"
          type="file"
          {...rest}
        />

      </label>
    </Container>
  )
}