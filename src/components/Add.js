import {
  Tooltip,
  IconButton,
  Fab,
  Box,
  Modal,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import React, { useState } from "react"
import {
  Article,
  DateRange,
  EmojiEmotions,
  PersonAdd,
  Poll,
  VideoCameraBack,
} from "@mui/icons-material"
import ImageIcon from "@mui/icons-material/Image"

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
})

export const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title='Add'
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}>
        <IconButton>
          <Fab color='primary' aria-label='add'>
            <AddIcon />
          </Fab>
        </IconButton>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={5}
          p={4}>
          <Typography variant='h6' color='gray' textAlign='center'>
            Create post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src='https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg'
            />
            <Typography fontWeight={500} variant='subtitle1'>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id='standard-multiline-static'
            multiline
            rows={3}
            placeholder="what's on your mind?"
            variant='standard'
          />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <Tooltip title='emoji'>
              <EmojiEmotions sx={{ color: "gold" }} />
            </Tooltip>
            <Tooltip title='image'>
              <ImageIcon sx={{ color: "skyblue" }} />
            </Tooltip>
            <Tooltip title='video'>
              <VideoCameraBack sx={{ color: "lightcoral" }} />
            </Tooltip>
            <Tooltip title='poll'>
              <Poll sx={{ color: "lightgreen" }} />
            </Tooltip>
            <Tooltip title='article'>
              <Article sx={{ color: "orange" }} />
            </Tooltip>
            <Tooltip title='add person'>
              <PersonAdd sx={{ color: "pink" }} />
            </Tooltip>
          </Stack>
          <ButtonGroup fullWidth variant='contained' aria-label='outlined primary button group'>
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}
