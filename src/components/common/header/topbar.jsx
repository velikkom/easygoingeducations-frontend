import React from 'react'
import { config } from '@/helpers/config'
import { Container } from 'react-bootstrap'

export const Topbar = () => {
  return (
    <div>
      <Container className="topbar">
        <div className="slogan">
          <i className= "pipi-megaphone"></i>
          {config.project.slogan}
        </div>
      </Container>
    </div>
  )
}
