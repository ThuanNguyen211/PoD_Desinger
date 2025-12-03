import { Modal, Box, Typography, IconButton } from '@mui/material';
import { commonModalSx, commonBoxSx, commonHeaderSx } from '../constants';

interface ImportModalProps {
  open: boolean;
  onClose: () => void;
  importError: string | null;
}

export const ImportModal = ({ open, onClose, importError }: ImportModalProps) => (
  <Modal open={open} onClose={onClose} aria-labelledby="importModalLabel" sx={commonModalSx}>
    <Box sx={{ ...commonBoxSx, maxWidth: 400 }}>
      <Box sx={commonHeaderSx}>
        <Typography variant="h6" id="importModalLabel">Import Design</Typography>
        <IconButton onClick={onClose} sx={{ color: 'text.secondary' }}>
          <i className="fas fa-times"></i>
        </IconButton>
      </Box>
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        <input type="file" accept=".json" className="hidden" id="jsonFileInput" />
        <label htmlFor="jsonFileInput" className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2 cursor-pointer">
          <i className="fas fa-file-upload"></i>
          Choose JSON File
        </label>
        {importError && <Typography color="error" sx={{ textAlign: 'center', mt: 1 }}>{importError}</Typography>}
      </Box>
    </Box>
  </Modal>
);
