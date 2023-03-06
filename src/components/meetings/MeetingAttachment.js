import { AddAPhoto, AddPhotoAlternate, PhotoCamera } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Input,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';

const MeetingAttachment = ({ data }) => {
  const { files } = data;

  const [open, setOpen] = React.useState(false);

  const [photos, setPhotos] = React.useState([]);
  const [newFiles, setNewFiles] = React.useState([]);

  useEffect(() => {
    setPhotos(files);
  }, [files]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      backgroundColor={'#f5f5f5'}
      p="30px"
      overflow="auto"
      gridArea="attachment"
    >
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        // color={colors.greenAccent[400]}
      >
        Attachments
        <IconButton
          color="primary"
          sx={{ float: 'right' }}
          onClick={handleClickOpen}
        >
          <AddPhotoAlternate />
        </IconButton>
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        // justifyContent="space-around"
        mt="10px"
        flexWrap={'wrap'}
      >
        {files?.map((file) => (
          <Card
            sx={{
              m: 3,
            }}
          >
            <CardMedia
              style={{
                height: '194px',
                width: '194px',
              }}
              component="img"
              height="194"
              width="194"
              image={file?.f_url}
              alt="Paella dish"
            />
          </Card>
        ))}
      </Box>
      {/* ------------------------------ */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Attachments</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add or update attachments, please select the files you want to
            add or update.{' '}
            <span
              style={{
                color: 'red',
              }}
            >
              Note: everytime you add or update, the previous files will be
              deleted.
            </span>
          </DialogContentText>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Box>
          <Box
            sx={{
              mt: 2,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            {photos?.map((photo) => (
              <Card
                sx={{
                  m: 3,
                }}
              >
                <CardMedia
                  component="img"
                  height="40"
                  width="40"
                  image={photo?.f_url}
                  alt="Paella dish"
                />
              </Card>
            ))}
          </Box>
          <Box
            sx={{
              mt: 2,
            }}
          >
            {newFiles?.map((file) => (
              <Card
                sx={{
                  m: 3,
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {file?.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MeetingAttachment;
