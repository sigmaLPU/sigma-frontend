import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';

const MeetingAttachment = ({ data }) => {
  const { files } = data;
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

      <Box>
        <Button variant="contained" color="primary" sx={{ m: 2 }}>
          Add Attachments
        </Button>
      </Box>
    </Box>
  );
};

export default MeetingAttachment;
