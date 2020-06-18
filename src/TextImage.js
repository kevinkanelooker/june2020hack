import React from 'react'
import {List} from 'react-content-loader'
import {Box} from  "@looker/components";

export const TextImage = () => (
  <Box alignItems={'center'} justifyContent={'center'} mt={'30%'} ml={'25%'} >
    <List {...configuration()}/>
  </Box>
)

const configuration = () => {
  return {
    animate:false,
    preserveAspectRatio: 'xMidYMid meet',
  }
}
