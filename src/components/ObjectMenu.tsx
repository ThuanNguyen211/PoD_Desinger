import { Paper } from '@mui/material';
import { objectMenuSx } from '../constants';

interface ObjectMenuProps {
  show: boolean;
}

export const ObjectMenu = ({ show }: ObjectMenuProps) => (
  <Paper elevation={3} sx={{ ...objectMenuSx, display: show ? 'flex' : 'none' }}>
    <button type="button" id="copy" className="bg-transparent border-none p-1.5 rounded cursor-pointer text-white hover:bg-white/10 transition-all flex flex-col items-center gap-0.5">
      <i className="fas fa-copy text-base"></i>
      <span className="text-[10px]">Copy</span>
    </button>
    <button type="button" id="paste" className="bg-transparent border-none p-1.5 rounded cursor-pointer text-white hover:bg-white/10 transition-all flex flex-col items-center gap-0.5">
      <i className="fas fa-paste text-base"></i>
      <span className="text-[10px]">Paste</span>
    </button>
    <button type="button" id="rotate" className="bg-transparent border-none p-1.5 rounded cursor-pointer text-white hover:bg-white/10 transition-all flex flex-col items-center gap-0.5">
      <i className="fas fa-sync-alt text-base"></i>
      <span className="text-[10px]">Rotate</span>
    </button>
    <button type="button" id="delete" className="bg-transparent border-none p-1.5 rounded cursor-pointer text-white hover:bg-white/10 transition-all flex flex-col items-center gap-0.5">
      <i className="fas fa-trash text-base"></i>
      <span className="text-[10px]">Delete</span>
    </button>
  </Paper>
);
