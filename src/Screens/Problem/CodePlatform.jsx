import { Editor } from '@monaco-editor/react';
import React, { useEffect, useRef, useState } from 'react';

const CodePlatform = ({ lang, broilerPlateCode, setBroilerPlateCode }) => {
  const [code, setCode] = useState(broilerPlateCode);
  const editorRef = useRef(null);

  useEffect(() => {
    setCode(broilerPlateCode);
  }, [broilerPlateCode]);

  const handleChange = (newCode) => {
    setCode(newCode);
    setBroilerPlateCode(newCode);
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;

    // Disable Ctrl+V / Cmd+V (paste)
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyV, () => {});

    // Disable Ctrl+C / Cmd+C (copy)
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyC, () => {});

    // Block native paste and copy events
    const domNode = editor.getDomNode();
    if (domNode) {
      domNode.addEventListener('paste', (e) => e.preventDefault());
      domNode.addEventListener('copy', (e) => e.preventDefault());
    }
  };

  return (
    <div className="w-full h-full py-4 bg-[#1e1e1e] rounded-md">
      <Editor
        height="100%"
        theme="vs-dark"
        language={lang}
        value={code}
        onChange={handleChange}
        onMount={handleEditorDidMount}
        options={{
          contextmenu: false, // disable right-click menu
        }}
      />
    </div>
  );
};

export default CodePlatform;
