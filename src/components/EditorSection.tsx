import { Box } from '@mui/material';
import { editorImageSx } from '../constants';

export const EditorSection = () => (
  <Box component="section" id="editorImage" sx={editorImageSx}>
    <Box sx={{ position: 'relative', maxWidth: '600px', mx: 'auto' }}>
      {/* Placeholder for design canvas */}
      <div id="preview-front"></div>
      <div id="preview-back"></div>
    </Box>
  </Box>
);
