import { Settings, Add } from "@mui/icons-material"
import { Button, Typography, styled } from "@mui/material"

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "#fff",
    },
  })

  return (
    <div>
      <Button variant='text'>Text</Button>
      <Button startIcon={<Settings />} variant='contained' color='secondary' size='small'>
        Contained
      </Button>
      <Button startIcon={<Add />} variant='contained' color='success' size='small'>
        Contained
      </Button>
      <Button variant='outlined' disabled>
        Outlined
      </Button>
      <Typography variant='h1' component='p'>
        It uses h1 style but it's a p tag
      </Typography>
      <BlueButton>My Unique Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
    </div>
  )
}

export default App
