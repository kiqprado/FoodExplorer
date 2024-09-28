import { Container, Select } from './styles'

export function InputSelect({ icon: Icon, onChange }) {
  return(
    <Container>
      {Icon && <Icon size={24}/>}
      <Select defaultValue="" onChange={onChange}>
        <option value="" disabled hidden>Selecione a categoria</option>
        <option value="Refeições">Refeições</option>
        <option value="Sobremesas">Sobremesas</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Acompanhamentos">Acompanhamentos</option>
      </Select>
    </Container>

  )
}