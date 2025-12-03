import { Paper, Box, Typography } from '@mui/material';
import { leftMenuSx } from '../constants';

interface LeftMenuProps {
  onFrontClick?: () => void;
  onBackClick?: () => void;
}

export const LeftMenu = ({ onFrontClick, onBackClick }: LeftMenuProps) => (
  <Paper id="leftMenu" elevation={3} sx={leftMenuSx} />
);
