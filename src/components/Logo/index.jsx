import { Container } from './styles'

import Polygon from '../../assets/Polygon.svg'
import PolygonGrey from '../../assets/PolygonGrey.svg'

export function Logo({ size, isFooter = false }) {
  return(
    <Container size={size} to="/">
      <img src={ isFooter ? PolygonGrey : Polygon} alt="" />

      <h1>food explorer</h1>
    </Container>
  )
}