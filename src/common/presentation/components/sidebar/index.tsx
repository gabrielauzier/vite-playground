import { NavItem } from './nav-item'
import { Navigation } from './navigation'
import { Root } from './root'

import {
  Buildings,
  UsersThree,
  Person,
  Book,
  PaperPlaneTilt,
} from 'phosphor-react'

export function Sidebar() {
  return (
    <>
      <Root>
        <Navigation>
          <NavItem icon={<Buildings />}>Companies</NavItem>
          <NavItem icon={<UsersThree />}>Teams</NavItem>
          <NavItem icon={<Person />}>People</NavItem>
          <NavItem icon={<Book />}>Activities</NavItem>
          <NavItem icon={<PaperPlaneTilt />}>Messengers</NavItem>
        </Navigation>
      </Root>
    </>
  )
}
