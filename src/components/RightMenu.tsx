import { Paper, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { rightMenuSx } from '../constants';

const StyledButton = styled(IconButton)({
  backgroundColor: 'transparent', border: 'none', padding: '6px', borderRadius: '4px',
  cursor: 'pointer', color: 'white', transition: 'all 0.2s', display: 'flex',
  flexDirection: 'column', alignItems: 'center', gap: '2px',
  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', transform: 'translateX(4px)' },
});

interface RightMenuProps {
  onColorClick: () => void;
  onShapeClick: () => void;
  onImportClick: () => void;
  onExportClick: () => void;
}

export const RightMenu = ({ onColorClick, onShapeClick, onImportClick, onExportClick }: RightMenuProps) => (
  <Paper id="rightMenu" elevation={3} sx={rightMenuSx}>
    <StyledButton onClick={onColorClick} id="color">
      <i className="fas fa-palette text-base"></i>
      <Typography variant="caption" sx={{ fontSize: '10px' }}>Colors</Typography>
    </StyledButton>
    <button className="bg-transparent border-none p-1.5 rounded cursor-pointer text-white hover:bg-white/10 hover:translate-x-1 transition-all flex flex-col items-center gap-0.5">
      <label id="uploadFromPC" className="cursor-pointer flex flex-col items-center gap-0.5">
        <i className="fas fa-images text-base"></i>
        <span className="text-[10px]">Images</span>
        <input type="file" id="file-select" name="file-select" className="hidden" accept="image/jpeg" />
      </label>
    </button>
    <button id="addingText" data-modal-target="editorTextModal" data-modal-toggle="editorTextModal" className="bg-transparent border-none p-1.5 rounded cursor-pointer text-white hover:bg-white/10 hover:translate-x-1 transition-all flex flex-col items-center gap-0.5">
      <i className="fas fa-font text-base"></i>
      <span className="text-[10px]">Text</span>
    </button>
    <StyledButton onClick={onShapeClick} id="shape">
      <i className="fas fa-shapes text-base"></i>
      <Typography variant="caption" sx={{ fontSize: '10px' }}>Shapes</Typography>
    </StyledButton>
    <button type="button" id="import" onClick={onImportClick} className="bg-transparent border-none p-1.5 rounded cursor-pointer text-white hover:bg-white/10 hover:translate-x-1 transition-all flex flex-col items-center gap-0.5">
      <i className="fas fa-upload text-base"></i>
      <span className="text-[10px]">Import</span>
    </button>
    <button type="button" id="export" onClick={onExportClick} className="bg-transparent border-none p-1.5 rounded cursor-pointer text-white hover:bg-white/10 hover:translate-x-1 transition-all flex flex-col items-center gap-0.5">
      <i className="fas fa-download text-base"></i>
      <span className="text-[10px]">Export</span>
    </button>
  </Paper>
);
