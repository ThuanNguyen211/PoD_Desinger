import { Modal, Box, Typography, IconButton } from '@mui/material';
import { commonModalSx, commonBoxSx, commonHeaderSx } from '../constants';

interface ExportModalProps {
  open: boolean;
  onClose: () => void;
}

export const ExportModal = ({ open, onClose }: ExportModalProps) => (
  <Modal open={open} onClose={onClose} aria-labelledby="exportModalLabel" sx={commonModalSx}>
    <Box sx={{ ...commonBoxSx, maxWidth: 400 }}>
      <Box sx={commonHeaderSx}>
        <Typography variant="h6" id="exportModalLabel">Choose Export Type</Typography>
        <IconButton onClick={onClose} sx={{ color: 'text.secondary' }}>
          <i className="fas fa-times"></i>
        </IconButton>
      </Box>
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2">
          <i className="fas fa-image"></i>
          Export as Images
        </button>
        <button className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-2">
          <i className="fas fa-code"></i>
          Export as JSON
        </button>
      </Box>
    </Box>
  </Modal>
);
