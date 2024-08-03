import { Skeleton } from '@mui/material';
import React from 'react'

function CardSkeleton() {
  return (<>
  {console.log("chapri")}
       <Box
      sx={{
        bgcolor: '#121212',
        p: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Box>
</>
  )
}

export default CardSkeleton;