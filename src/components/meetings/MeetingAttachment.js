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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MeetingAttachment = ({ data }) => {
  const params = useParams();
  const { files } = data;

  const [open, setOpen] = React.useState(false);

  const [photos, setPhotos] = React.useState([]);
  const [newFiles, setNewFiles] = React.useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState(null);
  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
  // const url = 'http://localhost:5000';

  const handleFileInputChange = (event) => {
    setSelectedFiles(event.target.files);

    setImagesPreview([]);

    for (let i = 0; i < event.target.files.length; i++) {
      setImagesPreview((imagesPreview) => [
        ...imagesPreview,
        URL.createObjectURL(event.target.files[i]),
      ]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFiles.length <= 1) {
      alert.error('Please select at least 2 images');
      return;
    }
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    axios
      .put(url + '/api/v2/meeting/single/' + params.id, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        window.location.reload();

      }).catch((error) => {
        alert(error.response.data.message,'error')
      });
  };

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
        {/* <form onSubmit={handleAddAttachments}> */}
          <form onSubmit={handleSubmit}>
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
           
          
              <input
                type="file"
                name="files"
                multiple
                onChange={handleFileInputChange}
              />
              {/* <button type="submit">Upload</button> */}
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
            {imagesPreview.map((file) => (
              <Card
                sx={{
                  m: 3,
                }}
              >
                <CardMedia
                  component="img"
                  height="40"
                  width="40"
                  image={file}
                  alt="Paella dish"
                />
              </Card>
            ))}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
                    </form>
        {/* </form> */}

      </Dialog>
    </Box>
  );
};

export default MeetingAttachment;
