import { Box } from '@material-ui/core';
import { Typography, Button, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  open: boolean;
  text: string;
  buttonTextLeft: string;
  buttonTextRight: string;
  onClickLeft: () => void;
  onClickRight: () => void;
};

const ConfirmDialog: React.FC<ModalProps> = ({
  open,
  text,
  buttonTextLeft,
  buttonTextRight,
  onClickLeft,
  onClickRight,
}) => (
  <>
    <Modal open={open}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {text}
        </Typography>
        <Button onClick={onClickLeft} sx={{ mt: 2 }}>
          {buttonTextLeft}
        </Button>
        <Button onClick={onClickRight} sx={{ mt: 2 }}>
          {buttonTextRight}
        </Button>
      </Box>
    </Modal>
  </>
);
export default ConfirmDialog;
