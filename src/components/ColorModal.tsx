import { Modal, Box, Typography, IconButton } from '@mui/material';
import { colors, commonModalSx, commonBoxSx, commonHeaderSx } from '../constants';

interface ColorModalProps {
  open: boolean;
  onClose: () => void;
  onColorSelect?: (color: string) => void;
}

export const ColorModal = ({ open, onClose, onColorSelect }: ColorModalProps) => (
  <Modal open={open} onClose={onClose} aria-labelledby="colorModalLabel" sx={commonModalSx}>
    <Box sx={{ ...commonBoxSx, maxWidth: 500 }}>
      <Box sx={commonHeaderSx}>
        <Typography variant="h6" id="colorModalLabel">Choose a color</Typography>
        <IconButton onClick={onClose} sx={{ color: 'text.secondary' }}>
          <i className="fas fa-times"></i>
        </IconButton>
      </Box>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2 }}>
          {colors.map((color) => (
            <Box
              key={color}
              onClick={() => {
                onColorSelect?.(color);
                onClose();
              }}
              sx={{
                width: 40, height: 40, borderRadius: '50%', backgroundColor: color,
                cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' }
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  </Modal>
);
