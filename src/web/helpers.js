import { h } from 'hyperapp'

export function classNames(arr) {
  return arr.join(' ')
}


export function displayZCRT(amount) {
  return <span>{amount.toFixed(4)} ZCRT</span>
}
