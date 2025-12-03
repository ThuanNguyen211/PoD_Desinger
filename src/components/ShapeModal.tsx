import { Modal, Box, Typography, IconButton } from '@mui/material';
import { colors, shapeIcons, shapeColors, commonModalSx, commonBoxSx, commonHeaderSx } from '../constants';

interface ShapeModalProps {
  open: boolean;
  onClose: () => void;
  selectedShape: string | null;
  setSelectedShape: (shape: string | null) => void;
  shapeColor: string;
  setShapeColor: (color: string) => void;
  shapeStrokeColor: string;
  setShapeStrokeColor: (color: string) => void;
  shapeStrokeWidth: number;
  setShapeStrokeWidth: (width: number) => void;
}

export const ShapeModal = ({
  open, onClose, selectedShape, setSelectedShape, shapeColor, setShapeColor,
  shapeStrokeColor, setShapeStrokeColor, shapeStrokeWidth, setShapeStrokeWidth
}: ShapeModalProps) => {
  const renderColorGrid = (onColorClick: (color: string) => void, columns = 6) => (
    <Box sx={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: columns === 6 ? 2 : 0.5 }}>
      {colors.map((color) => (
        <Box key={color} onClick={() => onColorClick(color)} sx={{
          width: columns === 6 ? 40 : 25, height: columns === 6 ? 40 : 25, borderRadius: '50%',
          backgroundColor: color, cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' }
        }} />
      ))}
    </Box>
  );

  const renderShapeButton = (shape: string) => (
    <IconButton key={shape} onClick={() => setSelectedShape(shape)} sx={{
      backgroundColor: selectedShape === shape ? shapeColors[shape].selected : shapeColors[shape].normal,
      color: 'white', '&:hover': { backgroundColor: shapeColors[shape].hover }, width: '60px', height: '60px'
    }}>
      <i className={shapeIcons[shape]}></i>
    </IconButton>
  );

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="shapeModalLabel" sx={commonModalSx}>
      <Box sx={{ ...commonBoxSx, maxWidth: 800 }}>
        <Box sx={commonHeaderSx}>
          <Typography variant="h6" id="shapeModalLabel">Add Shape</Typography>
          <IconButton onClick={onClose} sx={{ color: 'text.secondary' }}>
            <i className="fas fa-times"></i>
          </IconButton>
        </Box>
        <Box sx={{ p: 3 }}>
          {/* Preview Area */}
          <Box sx={{ height: '120px', backgroundColor: '#f8fafc', borderRadius: '8px', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #e2e8f0' }}>
            {selectedShape ? (
              <Box sx={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={shapeIcons[selectedShape]} style={{ fontSize: '45px', color: shapeColor, WebkitTextStroke: `${shapeStrokeWidth}px ${shapeStrokeColor}` }} />
              </Box>
            ) : (
              <Typography variant="body1" sx={{ color: '#94a3b8' }}>Select a shape to preview</Typography>
            )}
          </Box>

          {/* Shape Selection */}
          <Typography variant="subtitle1" sx={{ mb: 2 }}>Select Shape</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 2 }}>
            {Object.keys(shapeIcons).map(renderShapeButton)}
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>Fill Color</Typography>
            {renderColorGrid(setShapeColor, 15)}
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>Shape Stroke Color</Typography>
            {renderColorGrid(setShapeStrokeColor, 15)}
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>Shape Stroke Width</Typography>
            <input type="range" min="0" max="10" defaultValue="2" className="w-full" onChange={(e) => setShapeStrokeWidth(Number(e.target.value))} />
          </Box>

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2" disabled={!selectedShape} style={{ opacity: selectedShape ? 1 : 0.5 }}>
              <i className="fas fa-plus"></i>
              Add Shape
            </button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
