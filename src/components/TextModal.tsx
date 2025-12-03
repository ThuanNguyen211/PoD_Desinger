import { colors } from '../constants';

const fontFamilies = [
  'Montserrat', 'Sans Serif', 'Arial', 'Comic Sans MS', 'Times New Roman',
  'Courier New', 'Verdana', 'Trebuchet MS', 'Arial Black', 'Impact',
  'Bookman', 'Garamond', 'Palatino', 'Georgia'
];

export const TextModal = () => (
  <div id="editorTextModal" tabIndex={-1} aria-labelledby="editorTextModalLabel" className="fixed inset-0 z-50 hidden bg-black/50 backdrop-blur-sm" role="dialog">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
      <div className="bg-white rounded-lg shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h5 className="text-xl font-semibold text-center" id="editorTextModalLabel">Add Text</h5>
          <button type="button" className="text-gray-400 hover:text-gray-500" data-modal-hide="editorTextModal">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6" id="editorTextDrawer">
          <div className="space-y-6">
            <div>
              <textarea className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="textInput" rows={3} placeholder="Enter your text here..."></textarea>
            </div>

            <div id="fontColorPickerWrap">
              <h5 className="text-lg font-medium mb-3">Text Color</h5>
              <div id="fontColorPicker">
                <div className="grid grid-cols-10 gap-1">
                  {colors.map((color) => (
                    <div key={color} className="w-7 h-7 rounded-full cursor-pointer transform hover:scale-110 transition-transform" style={{ backgroundColor: color }} data-color={color} />
                  ))}
                </div>
              </div>
            </div>

            <div id="fontStyle">
              <h5 className="text-lg font-medium mb-3">Font Style</h5>
              <div className="flex justify-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" id="boldCheck" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  <span>Bold</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" id="italicCheck" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  <span>Italic</span>
                </label>
              </div>
            </div>

            <div id="fontFamily">
              <h5 className="text-lg font-medium mb-3">Font Family</h5>
              <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" id="chooseFontFamily">
                {fontFamilies.map((font) => (
                  <option key={font} value={font}>{font}</option>
                ))}
              </select>
            </div>

            <div className="text-center">
              <button type="button" className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" id="submitText">Add Text</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
