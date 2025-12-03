// Colors palette
export const colors = [
  '#FFFFFF', '#000000', '#FF0000', '#00FF00', '#0000FF',
  '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080',
  '#616161', '#f0f0f0', '#5b5b5b', '#222222', '#fc8d74',
  '#432d26', '#eead91', '#806355', '#382d21', '#faef93',
  '#aeba5e', '#8aa140', '#1f6522', '#13afa2', '#b8d5d7',
  '#15aeda', '#a5def8', '#0f77c0', '#3469b7', '#c50404'
];

// Shape icons mapping
export const shapeIcons: Record<string, string> = {
  circle: 'fas fa-circle',
  rect: 'fas fa-square',
  triangle: 'fas fa-play fa-rotate-270',
  star: 'fas fa-star',
  heart: 'fas fa-heart',
  diamond: 'fas fa-gem',
  hexagon: 'fas fa-hexagon',
  cloud: 'fas fa-cloud'
};

// Shape colors mapping
export const shapeColors: Record<string, { selected: string; normal: string; hover: string }> = {
  circle: { selected: '#1d4ed8', normal: '#3b82f6', hover: '#2563eb' },
  rect: { selected: '#15803d', normal: '#22c55e', hover: '#16a34a' },
  triangle: { selected: '#7e22ce', normal: '#a855f7', hover: '#9333ea' },
  star: { selected: '#b45309', normal: '#f59e0b', hover: '#d97706' },
  heart: { selected: '#b91c1c', normal: '#ef4444', hover: '#dc2626' },
  diamond: { selected: '#0e7490', normal: '#06b6d4', hover: '#0891b2' },
  hexagon: { selected: '#6d28d9', normal: '#8b5cf6', hover: '#7c3aed' },
  cloud: { selected: '#475569', normal: '#64748b', hover: '#475569' }
};

// Common sx objects
export const commonModalSx = { display: 'flex', alignItems: 'center', justifyContent: 'center' };
export const commonBoxSx = { backgroundColor: 'white', borderRadius: 1, boxShadow: 24, width: '100%', mx: 2 };
export const commonHeaderSx = { display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: '1px solid', borderColor: 'divider' };

export const rightMenuSx = { position: 'fixed', left: 0, top: '45px', bottom: 0, width: '60px', backgroundColor: '#18044c', py: 1, px: 0.5, display: 'flex', flexDirection: 'column', gap: 0.5, zIndex: 10 };
export const leftMenuSx = { position: 'fixed', right: 0, top: '45px', bottom: 0, width: '100px', backgroundColor: '#f8ecfc', py: 1, px: 0.5, display: 'flex', flexDirection: 'column', gap: 0.5, zIndex: 10 };
export const objectMenuSx = { position: 'fixed', left: '50%', bottom: '20px', transform: 'translateX(-50%)', backgroundColor: '#18044c', py: 1, px: 2, flexDirection: 'row', gap: 2, zIndex: 10, borderRadius: '8px' };

export const editorImageSx = { pl: '60px', pr: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 45px)' };
