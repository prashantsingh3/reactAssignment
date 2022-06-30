import { memo } from 'react'
import { Box } from './Box.js'
import { Dustbin } from './Dustbin.js'
export const Container = memo(function Container() {
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Box title="Pen" name="Pen" />
        <Box title="News Paper" name="News Paper" />
        <Box title="Bottle" name="Bottle" />
      </div>
    </div>
  )
})
