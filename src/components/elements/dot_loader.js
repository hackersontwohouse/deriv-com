import React from 'react'
import styled, { keyframes } from 'styled-components'

const dots = keyframes` 
0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  40% {
    color: grey;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);}
  60% {
    text-shadow:
      .25em 0 0 grey,
      .5em 0 0 rgba(0,0,0,0);}
  80%, 100% {
    text-shadow:
      .25em 0 0 grey,
      .5em 0 0 grey;}`
const InitialLoader = styled.span`
    text-align: center;
    ::after {
        color: grey;
        content: ' .';
        animation: ${dots} 1s steps(5, end) infinite;
        font-size: 2rem;
        line-height: 1;
    }
`
const DotLoader = () => <InitialLoader />
export default DotLoader
