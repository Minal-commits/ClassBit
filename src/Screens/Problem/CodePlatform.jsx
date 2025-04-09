import { Editor } from '@monaco-editor/react';
import React, { useEffect, useState } from 'react';

const CodePlatform = ({ lang, broilerPlateCode, setBroilerPlateCode }) => {
  const [code, setCode] = useState(broilerPlateCode);

  useEffect(() => {
    setCode(broilerPlateCode); // Update code when broilerPlateCode changes
  }, [broilerPlateCode]);

  const handleChange = (newCode) => {
    setCode(newCode);
    setBroilerPlateCode(newCode); // Update parent state
  };

  return (
    <div className="w-full h-full py-4 bg-[#1e1e1e] rounded-md">
      <Editor
        height="100%"
        theme="vs-dark"
        language={lang}
        value={code}
        onChange={handleChange} // Directly pass handleChange
        
      />
    </div>
  );
};

export default CodePlatform;
