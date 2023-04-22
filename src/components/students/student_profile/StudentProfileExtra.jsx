import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Switch,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StudentProfileExtra = () => {
  const params = useParams();

  const [studentStatus, setStudentStatus] = useState({});
  const [loggedInUser, setLoggedInUser] = useState('');
  const [initialized, setInitialized] = useState(false);

  // -----------------------  State  -----------------------

  const [filledCtOnUms, setFilledCtOnUms] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [lpuBankDetailsShared, setLpuBankDetailsShared] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [feePaidForCtProgram, setFeePaidForCtProgram] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [receiptSentToStudent, setReceiptSentToStudent] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [receiptUploadedOnUms, setReceiptUploadedOnUms] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [facultyInterviewDone, setFacultyInterviewDone] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [ctHeadInterviewDone, setCtHeadInterviewDone] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [nominationToPartnerUniversity, setNominationToPartnerUniversity] =
    useState({
      status: '',
      updatedBy: '',
      updatedAt: '',
    });

  const [originalTranscriptsReceived, setOriginalTranscriptsReceived] =
    useState({
      status: '',
      updatedBy: '',
      updatedAt: '',
    });
  const [recommendationLetterGenerated, setRecommendationLetterGenerated] =
    useState({
      status: '',
      updatedBy: '',
      updatedAt: '',
    });

  const [conditionalLetterReceived, setConditionalLetterReceived] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [feePaidForPartnerUniversity, setFeePaidForPartnerUniversity] =
    useState({
      status: '',
      updatedBy: '',
      updatedAt: '',
    });
  const [
    unconditionalOfferLetterReceived,
    setUnconditionalOfferLetterReceived,
  ] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [nocDocumentGenerated, setNocDocumentGenerated] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [appliedForVisa, setAppliedForVisa] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [visaReceived, setVisaReceived] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [
    visaAndOfferLetterScannedCopyShared,
    setVisaAndOfferLetterScannedCopyShared,
  ] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  const [indemnityBondCouriered, setIndemnityBondCouriered] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });
  const [originalTranscriptsCouriered, setOriginalTranscriptsCouriered] =
    useState({
      status: '',
      updatedBy: '',
      updatedAt: '',
    });

  const [
    studentDetailsSharedWithAcademics,
    setStudentDetailsSharedWithAcademics,
  ] = useState({
    status: '',
    updatedBy: '',
    updatedAt: '',
  });

  // -----------------------  State  -----------------------

  const url = 'https://sigma-lpu-vsbd9.ondigitalocean.app';
  // const url = 'http://localhost:5000';

  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant, message) => () => {
    enqueueSnackbar(message, { variant });
  };

  useEffect(() => {
    axios
      .get(
        `${url}/api/v2/user/studentStatus/${params.id}`,

        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        setLoggedInUser(res.data.user);

        if (res.data.success === false) {
          setInitialized(false);
          return;
        } else if (res.data.success === true) {
          setInitialized(true);
        }

        setStudentStatus(res.data.studentStatus);

        setFilledCtOnUms({
          status: res.data?.studentStatus?.filledCtOnUms?.status,
          updatedBy: res.data?.studentStatus?.filledCtOnUms?.updatedBy,
          updatedAt: res.data?.studentStatus?.filledCtOnUms?.updatedAt,
        });
        setLpuBankDetailsShared({
          status: res.data?.studentStatus?.lpuBankDetailsShared?.status,
          updatedBy: res.data?.studentStatus?.lpuBankDetailsShared?.updatedBy,
          updatedAt: res.data?.studentStatus?.lpuBankDetailsShared?.updatedAt,
        });

        setFeePaidForCtProgram({
          status: res.data?.studentStatus?.feePaidForCtProgram?.status,
          updatedBy: res.data?.studentStatus?.feePaidForCtProgram?.updatedBy,
          updatedAt: res.data?.studentStatus?.feePaidForCtProgram?.updatedAt,
        });

        setReceiptSentToStudent({
          status: res.data?.studentStatus?.receiptSentToStudent?.status,
          updatedBy: res.data?.studentStatus?.receiptSentToStudent?.updatedBy,
          updatedAt: res.data?.studentStatus?.receiptSentToStudent?.updatedAt,
        });

        setReceiptUploadedOnUms({
          status: res.data?.studentStatus?.receiptUploadedOnUms?.status,
          updatedBy: res.data?.studentStatus?.receiptUploadedOnUms?.updatedBy,
          updatedAt: res.data?.studentStatus?.receiptUploadedOnUms?.updatedAt,
        });

        setFacultyInterviewDone({
          status: res.data?.studentStatus?.facultyInterviewDone?.status,
          updatedBy: res.data?.studentStatus?.facultyInterviewDone?.updatedBy,
          updatedAt: res.data?.studentStatus?.facultyInterviewDone?.updatedAt,
        });

        setCtHeadInterviewDone({
          status: res.data?.studentStatus?.ctHeadInterviewDone?.status,
          updatedBy: res.data?.studentStatus?.ctHeadInterviewDone?.updatedBy,
          updatedAt: res.data?.studentStatus?.ctHeadInterviewDone?.updatedAt,
        });

        setNominationToPartnerUniversity({
          status:
            res.data?.studentStatus?.nominationToPartnerUniversity?.status,
          updatedBy:
            res.data?.studentStatus?.nominationToPartnerUniversity?.updatedBy,
          updatedAt:
            res.data?.studentStatus?.nominationToPartnerUniversity?.updatedAt,
        });

        setOriginalTranscriptsReceived({
          status: res.data?.studentStatus?.originalTranscriptsReceived?.status,
          updatedBy:
            res.data?.studentStatus?.originalTranscriptsReceived?.updatedBy,
          updatedAt:
            res.data?.studentStatus?.originalTranscriptsReceived?.updatedAt,
        });

        setRecommendationLetterGenerated({
          status:
            res.data?.studentStatus?.recommendationLetterGenerated?.status,
          updatedBy:
            res.data?.studentStatus?.recommendationLetterGenerated?.updatedBy,
          updatedAt:
            res.data?.studentStatus?.recommendationLetterGenerated?.updatedAt,
        });

        setConditionalLetterReceived({
          status: res.data?.studentStatus?.conditionalLetterReceived?.status,
          updatedBy:
            res.data?.studentStatus?.conditionalLetterReceived?.updatedBy,
          updatedAt:
            res.data?.studentStatus?.conditionalLetterReceived?.updatedAt,
        });

        setFeePaidForPartnerUniversity({
          status: res.data?.studentStatus?.feePaidForPartnerUniversity?.status,
          updatedBy:
            res.data?.studentStatus?.feePaidForPartnerUniversity?.updatedBy,
          updatedAt:
            res.data?.studentStatus?.feePaidForPartnerUniversity?.updatedAt,
        });

        setUnconditionalOfferLetterReceived({
          status:
            res.data?.studentStatus?.unconditionalOfferLetterReceived?.status,
          updatedBy:
            res.data?.studentStatus?.unconditionalOfferLetterReceived
              ?.updatedBy,
          updatedAt:
            res.data?.studentStatus?.unconditionalOfferLetterReceived
              ?.updatedAt,
        });

        setNocDocumentGenerated({
          status: res.data?.studentStatus?.nocDocumentGenerated?.status,
          updatedBy: res.data?.studentStatus?.nocDocumentGenerated?.updatedBy,
          updatedAt: res.data?.studentStatus?.nocDocumentGenerated?.updatedAt,
        });

        setAppliedForVisa({
          status: res.data?.studentStatus?.appliedForVisa?.status,
          updatedBy: res.data?.studentStatus?.appliedForVisa?.updatedBy,
          updatedAt: res.data?.studentStatus?.appliedForVisa?.updatedAt,
        });

        setVisaReceived({
          status: res.data?.studentStatus?.visaReceived?.status,
          updatedBy: res.data?.studentStatus?.visaReceived?.updatedBy,
          updatedAt: res.data?.studentStatus?.visaReceived?.updatedAt,
        });

        setVisaAndOfferLetterScannedCopyShared({
          status:
            res.data?.studentStatus?.visaAndOfferLetterScannedCopyShared
              ?.status,
          updatedBy:
            res.data?.studentStatus?.visaAndOfferLetterScannedCopyShared
              ?.updatedBy,
          updatedAt:
            res.data?.studentStatus?.visaAndOfferLetterScannedCopyShared
              ?.updatedAt,
        });

        setIndemnityBondCouriered({
          status: res.data?.studentStatus?.indemnityBondCouriered?.status,
          updatedBy: res.data?.studentStatus?.indemnityBondCouriered?.updatedBy,
          updatedAt: res.data?.studentStatus?.indemnityBondCouriered?.updatedAt,
        });

        setOriginalTranscriptsCouriered({
          status: res.data?.studentStatus?.originalTranscriptsCouriered?.status,
          updatedBy:
            res.data?.studentStatus?.originalTranscriptsCouriered?.updatedBy,
          updatedAt:
            res.data?.studentStatus?.originalTranscriptsCouriered?.updatedAt,
        });

        setStudentDetailsSharedWithAcademics({
          status:
            res.data?.studentStatus?.studentDetailsSharedWithAcademics?.status,
          updatedBy:
            res.data?.studentStatus?.studentDetailsSharedWithAcademics
              ?.updatedBy,
          updatedAt:
            res.data?.studentStatus?.studentDetailsSharedWithAcademics
              ?.updatedAt,
        });
      })
      .catch((err) => {
        handleClickVariant('error', 'Error' + err)();
      });
  }, [params.id]);

  // console.log(studentStatus);

  const handleInitialize = async () => {
    axios
      .post(
        `${url}/api/v2/user/studentStatus/${params.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((res) => {
        handleClickVariant('success', 'Status Updated')();
      })
      .catch((err) => {
        handleClickVariant('error', 'Error ' + err.message)();
      });
  };

  const handleForm = async (field) => {
    let data = {};

    if (field === 'filledCtOnUms') {
      data.filledCtOnUms = {
        status: filledCtOnUms.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'lpuBankDetailsShared') {
      data.lpuBankDetailsShared = {
        status: lpuBankDetailsShared.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'feePaidForCtProgram') {
      data.feePaidForCtProgram = {
        status: feePaidForCtProgram.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'receiptSentToStudent') {
      data.receiptSentToStudent = {
        status: receiptSentToStudent.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'receiptUploadedOnUms') {
      data.receiptUploadedOnUms = {
        status: receiptUploadedOnUms.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'facultyInterviewDone') {
      data.facultyInterviewDone = {
        status: facultyInterviewDone.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'ctHeadInterviewDone') {
      data.ctHeadInterviewDone = {
        status: ctHeadInterviewDone.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'nominationToPartnerUniversity') {
      data.nominationToPartnerUniversity = {
        status: nominationToPartnerUniversity.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'originalTranscriptsReceived') {
      data.originalTranscriptsReceived = {
        status: originalTranscriptsReceived.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'recommendationLetterGenerated') {
      data.recommendationLetterGenerated = {
        status: recommendationLetterGenerated.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'conditionalLetterReceived') {
      data.conditionalLetterReceived = {
        status: conditionalLetterReceived.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'feePaidForPartnerUniversity') {
      data.feePaidForPartnerUniversity = {
        status: feePaidForPartnerUniversity.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'unconditionalOfferLetterReceived') {
      data.unconditionalOfferLetterReceived = {
        status: unconditionalOfferLetterReceived.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'nocDocumentGenerated') {
      data.nocDocumentGenerated = {
        status: nocDocumentGenerated.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'appliedForVisa') {
      data.appliedForVisa = {
        status: appliedForVisa.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'visaReceived') {
      data.visaReceived = {
        status: visaReceived.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'visaAndOfferLetterScannedCopyShared') {
      data.visaAndOfferLetterScannedCopyShared = {
        status: visaAndOfferLetterScannedCopyShared.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'indemnityBondCouriered') {
      data.indemnityBondCouriered = {
        status: indemnityBondCouriered.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'originalTranscriptsCouriered') {
      data.originalTranscriptsCouriered = {
        status: originalTranscriptsCouriered.status,
        updatedBy: loggedInUser,
      };
    } else if (field === 'studentDetailsSharedWithAcademics') {
      data.studentDetailsSharedWithAcademics = {
        status: studentDetailsSharedWithAcademics.status,
        updatedBy: loggedInUser,
      };
    }

    await axios
      .post(`${url}/api/v2/user/studentStatus/${params.id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        handleClickVariant('success', 'Status Updated')();
      })
      .catch((err) => {
        handleClickVariant('error', 'Error ' + err.message)();
      });
  };

  return (
    <Box
      backgroundColor={'#f5f5f5'}
      p="30px"
      overflow="auto"
      gridArea="extra"
      height="100%"
      width="100%"
    >
      <Typography
        variant="h5"
        fontWeight="600"
        align="center"
        // color={colors.greenAccent[400]}
        marginBottom={'20px'}
      >
        Status
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleInitialize();
        }}
        style={{
          display: `${initialized ? 'none' : 'block'}`,
        }}
      >
        Intialize
      </Button>

      <Box
        id="studentStatus"
        display="flex"
        flexWrap="wrap"
        gap="30px"
        style={{
          display: `${initialized ? 'flex' : 'none'}`,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Filled Ct On Ums
          </Typography>

          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={filledCtOnUms.status}
              onChange={(e) => {
                setFilledCtOnUms({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('filledCtOnUms');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Lpu Bank Details Shared
          </Typography>

          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={lpuBankDetailsShared.status}
              onChange={(e) => {
                setLpuBankDetailsShared({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('lpuBankDetailsShared');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Fee Paid For CT
          </Typography>

          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={feePaidForCtProgram.status}
              onChange={(e) => {
                setFeePaidForCtProgram({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('feePaidForCtProgram');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Reciept Sent To Student
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={receiptSentToStudent.status}
              onChange={(e) => {
                setReceiptSentToStudent({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('receiptSentToStudent');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Reciept Uploaded On Ums
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={receiptUploadedOnUms.status}
              onChange={(e) => {
                setReceiptUploadedOnUms({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('receiptUploadedOnUms');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Faculty Interview Done
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={facultyInterviewDone.status}
              onChange={(e) => {
                setFacultyInterviewDone({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('facultyInterviewDone');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            CT Head Interview Done
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={ctHeadInterviewDone.status}
              onChange={(e) => {
                setCtHeadInterviewDone({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('ctHeadInterviewDone');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>

        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Nomination To Partner University
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={nominationToPartnerUniversity.status}
              onChange={(e) => {
                setNominationToPartnerUniversity({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('nominationToPartnerUniversity');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>

        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Original Transcripts Received
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={originalTranscriptsReceived.status}
              onChange={(e) => {
                setOriginalTranscriptsReceived({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('originalTranscriptsReceived');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Recommendation Letter Generated
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={recommendationLetterGenerated.status}
              onChange={(e) => {
                setRecommendationLetterGenerated({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('recommendationLetterGenerated');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Conditional Letter Received
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={conditionalLetterReceived.status}
              onChange={(e) => {
                setConditionalLetterReceived({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('conditionalLetterReceived');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Conditional Letter Received
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={feePaidForPartnerUniversity.status}
              onChange={(e) => {
                setFeePaidForPartnerUniversity({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('feePaidForPartnerUniversity');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Un Conditional Letter Received
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={unconditionalOfferLetterReceived.status}
              onChange={(e) => {
                setUnconditionalOfferLetterReceived({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('unconditionalOfferLetterReceived');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Noc Document Generated
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={nocDocumentGenerated.status}
              onChange={(e) => {
                setNocDocumentGenerated({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('nocDocumentGenerated');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Applied For Visa
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={appliedForVisa.status}
              onChange={(e) => {
                setAppliedForVisa({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('appliedForVisa');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Visa Received
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={visaReceived.status}
              onChange={(e) => {
                setVisaReceived({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('visaReceived');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Visa And Offer Letter Scanned Copy Shared
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={visaAndOfferLetterScannedCopyShared.status}
              onChange={(e) => {
                setVisaAndOfferLetterScannedCopyShared({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('visaAndOfferLetterScannedCopyShared');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Visa And Offer Letter Scanned Copy Shared
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={indemnityBondCouriered.status}
              onChange={(e) => {
                setIndemnityBondCouriered({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('indemnityBondCouriered');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Original Transcripts Couriered
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={originalTranscriptsCouriered.status}
              onChange={(e) => {
                setOriginalTranscriptsCouriered({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('originalTranscriptsCouriered');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
        <Box
          style={{
            minWidth: '200px',
            padding: '20px',
            backgroundColor: '#ffffff',
          }}
          display="flex"
          alignItems="center"
          gap="40px"
        >
          <Typography variant="h6" fontWeight="600">
            Student Details Shared With Academics
          </Typography>
          <FormControl
            variant="outlined"
            size="small"
            style={{
              display: 'flex',
              width: '100%',
            }}
          >
            <Select
              value={studentDetailsSharedWithAcademics.status}
              onChange={(e) => {
                setStudentDetailsSharedWithAcademics({
                  status: e.target.value,
                  updatedBy: loggedInUser,
                });
              }}
            >
              <MenuItem value={''}>Null</MenuItem>
              <MenuItem value={'yes'}>Yes</MenuItem>
              <MenuItem value={'no'}>No</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleForm('studentDetailsSharedWithAcademics');
              }}
              style={{ marginTop: '2px' }}
            >
              Submit
            </Button>
          </FormControl>{' '}
        </Box>
      </Box>
    </Box>
  );
};

export default StudentProfileExtra;
