import React, { FC } from 'react'
import { Nav } from './Nav'
import { Container, Content } from './styled'

export const Layout: FC = ({children}) => {
  return (
    <Container>
        <Nav/>
        <Content>
            {children}
        </Content>
    </Container>
  )
}
