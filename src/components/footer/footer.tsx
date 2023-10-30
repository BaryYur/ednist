// styled components
import { Container } from 'theme/elements'
import * as Elements from './elements'

export function Footer() {

  return <Elements.Wrapper>
    <Container>
      <Elements.InnerContainer>
        <Elements.CopyrightText>
          © 2021 Design by Yarmolenko Daniil.
        </Elements.CopyrightText>
      </Elements.InnerContainer>
    </Container>
  </Elements.Wrapper>
}