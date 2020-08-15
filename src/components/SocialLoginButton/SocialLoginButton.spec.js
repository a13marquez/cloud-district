import * as React from 'react'
import { mount } from 'enzyme'
import 'jest-styled-components'

import SocialLoginButton from './SocialLoginButton'

describe('SocialLoginButton', () => {
  let socialLoginButton = null
  afterEach(() => {
    socialLoginButton = null
  })
  it('it renders SocialLoginButton component', () => {
    expect(socialLoginButton).toMatchInlineSnapshot(`null`)
  })

  it('renders StyledSocialLoginButton', () => {
    socialLoginButton = mount(<SocialLoginButton />)
    expect(socialLoginButton).toHaveStyleRule('position', 'relative')
    expect(socialLoginButton).toHaveStyleRule('text-transform', 'uppercase')
    expect(socialLoginButton).toHaveStyleRule('padding', '0 48px')
    expect(socialLoginButton).toHaveStyleRule('min-height', '54px')
    expect(socialLoginButton).toHaveStyleRule('letter-spacing', '0.02em')
    expect(socialLoginButton).toHaveStyleRule('font-weight', '600')
    expect(socialLoginButton).toHaveStyleRule('border-radius', '100px')
    expect(socialLoginButton).toHaveStyleRule('border-color', '#5c5c5c')
    expect(socialLoginButton).toHaveStyleRule('color', '#5c5c5c')
  })

  it('renders the text send by props', () => {
    socialLoginButton = mount(<SocialLoginButton text="test text" />)
    expect(socialLoginButton.props().text).toBe('test text')
    expect(
      socialLoginButton.getDOMNode().querySelector('button-text').innerHTML
    ).toBe('test text')
  })
  it('renders the image send by props', () => {
    socialLoginButton = mount(
      <SocialLoginButton img='<img src="fake-src" />' />
    )
    expect(socialLoginButton.props().img).toBe('<img src="fake-src" />')
    expect(
      socialLoginButton.getDOMNode().querySelector('button-img').innerHTML
    ).toBe('<img src="fake-src" />')
  })
})
