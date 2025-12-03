import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import {
  ColorModal, ExportModal, ImportModal, TextModal, ShapeModal,
  RightMenu, LeftMenu, ObjectMenu, EditorSection
} from './components';

function App() {
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isShapeModalOpen, setIsShapeModalOpen] = useState(false);
  const [selectedShape, setSelectedShape] = useState<string | null>(null);
  const [shapeColor, setShapeColor] = useState('#000000');
  const [shapeStrokeColor, setShapeStrokeColor] = useState('#000000');
  const [shapeStrokeWidth, setShapeStrokeWidth] = useState(2);
  const [importError, setImportError] = useState<string | null>(null);
  const [showObjectMenu, setShowObjectMenu] = useState(false);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'rgb(243 244 246)', borderBottom: '1px solid rgb(229 231 235)' }}>
        <Toolbar variant="dense" sx={{ padding: '8px' }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, color: 'rgb(31 41 55)' }}>Design Functions</Typography>
        </Toolbar>
      </AppBar>

      <Box className="w-full">
        <Box className="relative">
          {/* Right Menu */}
          <RightMenu
            onColorClick={() => setIsColorModalOpen(true)}
            onShapeClick={() => setIsShapeModalOpen(true)}
            onImportClick={() => setIsImportModalOpen(true)}
            onExportClick={() => setIsExportModalOpen(true)}
          />

          {/* Editor Section */}
          <EditorSection />

          {/* Object Menu */}
          <ObjectMenu show={showObjectMenu} />

          {/* Left Menu */}
          <LeftMenu />
        </Box>
      </Box>

      {/* Modals */}
      <ColorModal
        open={isColorModalOpen}
        onClose={() => setIsColorModalOpen(false)}
      />

      <ExportModal
        open={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />

      <ImportModal
        open={isImportModalOpen}
        onClose={() => { setIsImportModalOpen(false); setImportError(null); }}
        importError={importError}
      />

      <ShapeModal
        open={isShapeModalOpen}
        onClose={() => setIsShapeModalOpen(false)}
        selectedShape={selectedShape}
        setSelectedShape={setSelectedShape}
        shapeColor={shapeColor}
        setShapeColor={setShapeColor}
        shapeStrokeColor={shapeStrokeColor}
        setShapeStrokeColor={setShapeStrokeColor}
        shapeStrokeWidth={shapeStrokeWidth}
        setShapeStrokeWidth={setShapeStrokeWidth}
      />

      {/* Text Modal */}
      <TextModal />

      {/* Loading indicator */}
      <div className="fixed inset-0 z-50 hidden items-center justify-center" role="status">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}

export default App;
