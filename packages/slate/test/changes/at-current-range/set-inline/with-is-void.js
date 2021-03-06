/** @jsx h */

import h from '../../../helpers/h'

export default function (change) {
  change.setInline({
    type: 'emoji',
    isVoid: true
  })
}

export const input = (
  <value>
    <document>
      <paragraph>
        <link><cursor />word</link>
      </paragraph>
    </document>
  </value>
)

// TODO: fix cursor placement
export const output = (
  <value>
    <document>
      <paragraph>
        <cursor /><emoji>{' '}</emoji>
      </paragraph>
    </document>
  </value>
)
