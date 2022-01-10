import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
// import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Button from '@mui/material/Button';
import Piaise from '@/components/Praise';
import GradientBackground from '@/components/GradientBackground';
import UserInfo from './components/UserInfo';
import Form from './components/Form';

interface User {
  nickname: string;
  avatarUrl: string;
  username: string;
}

interface IItemProps {
  blur: boolean;
  anonymous: boolean;
  content: string;
  status: string;
  user: User;
  like: number;
  onDelete: () => void;
  onLike: (count: number) => void;
  onUpdateContent: (v: unknown) => void;
  onUpdateStatus: (v: unknown) => void;
}

const Item: React.FunctionComponent<IItemProps> = (props) => {
  const {
    anonymous,
    content,
    like,
    status,
    user,
    blur,
    onLike,
    onDelete,
    onUpdateContent,
    onUpdateStatus,
  } = props;

  const [edit, setEdit] = useState<boolean>(false);

  return (
    <Box sx={{ mb: 1 }}>
      <GradientBackground
        status={status}
        blur={blur}
        focus={status === 'FOCUSED'}
      >
        <Box
          onClick={() => {
            onUpdateStatus({
              status: status === 'FOCUSED' ? 'NORMAL' : 'FOCUSED',
            });
          }}
        >
          {edit ? (
            <Form
              defaultValues={{ content }}
              onSubmit={(values) => {
                onUpdateContent(values);
                setEdit(false);
              }}
              onCancel={() => {
                setEdit(false);
              }}
              onDelete={() => {
                onDelete();
              }}
            />
          ) : (
            <>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  fontSize: 20,
                  overflow: 'hidden',
                  wordWrap: 'break-word',
                  mb: 2,
                }}
              >
                {content}
              </Typography>

              <Stack
                justifyContent="flex-start"
                direction="row"
                sx={{ mb: -1 }}
              >
                {!anonymous && status !== 'FOCUSED' && (
                  <UserInfo
                    avatarUrl={user?.avatarUrl as string}
                    nickname={(user?.nickname || user?.username) as string}
                  />
                )}

                {status === 'FOCUSED' && (
                  <Button
                    color="inherit"
                    onClick={() => {
                      onUpdateStatus({
                        status: 'NORMAL',
                      });
                    }}
                  >
                    Cancel
                  </Button>

                  // <IconButton
                  //   size="large"
                  //   onClick={(e) => {
                  //     e.stopPropagation();
                  //     onUpdate({
                  //       status: 'NORMAL',
                  //     });
                  //   }}
                  // >
                  //   <CloseIcon sx={{ fontSize: '20px', color: '#bdbdbd' }} />
                  // </IconButton>
                )}

                <Box sx={{ flex: 1 }} />

                {status === 'CLOSED' ? (
                  <CheckCircleOutlineOutlinedIcon color="secondary" sx={{}} />
                ) : (
                  <>
                    <Piaise
                      count={like}
                      onClick={(likeCount: number) => {
                        onLike(likeCount);
                      }}
                    />

                    {status !== 'FOCUSED' && (
                      <IconButton
                        size="large"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEdit(!edit);
                        }}
                      >
                        <EditIcon sx={{ fontSize: '20px', color: '#bdbdbd' }} />
                      </IconButton>
                    )}

                    {status === 'FOCUSED' && (
                      <Button
                        variant="contained"
                        color="success"
                        onClick={(e) => {
                          e.stopPropagation();
                          onUpdateStatus({
                            status: 'CLOSED',
                          });
                        }}
                      >
                        Done
                      </Button>
                    )}
                  </>
                )}
              </Stack>
            </>
          )}
        </Box>
      </GradientBackground>
    </Box>
  );
};

export default Item;
