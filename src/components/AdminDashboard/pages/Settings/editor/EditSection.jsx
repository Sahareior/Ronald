import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';

import { useLocation, useNavigate } from 'react-router-dom';
import Editor from './Editor';


const Delta = Quill.import('delta');

const EditSection = () => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);
  const location = useLocation()
  const [previewHTML, setPreviewHTML] = useState(''); // ✅ Displayed HTML
  const navigate = useNavigate()

  console.log(location)

useEffect(()=>{
      if(location.pathname === '/settings'){
      navigate('/settings/privacy')

  }
},[location.pathname])


  const quillRef = useRef(null);

  const text = `1. Acceptance of Terms
By downloading, installing, or using the [Your Hunting App Name] (the “App”), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, do not use the App.By downloading, installing, or using the [Your Hunting App Name] (the “App”), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, do not use the App.
2. Eligibility
You must be at least 18 years old (or the age of majority in your jurisdiction) to use the App. By using the App, you confirm that you meet this requirement.By downloading, installing, or using the [Your Hunting App Name] (the “App”), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, do not use the App.By downloading, installing, or using the [Your Hunting App Name] (the “App”), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, do not use the App.
3. Use of the App
You agree to use the App only for lawful purposes related to hunting, wildlife tracking, outdoor navigation, and other supported features. You must comply with all local, state, and federal hunting laws and regulations.
4. Licenses and Permits
You are solely responsible for obtaining all necessary hunting licenses, tags, permits, and approvals from appropriate wildlife authorities.By downloading, installing, or using the [Your Hunting App Name] (the “App”), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, do not use the App.
5. Prohibited Conduct
You may not:
Use the App to engage in illegal or unethical hunting practices.
Upload false or misleading information (e.g., about game locations).
Attempt to hack, reverse-engineer, or interfere with the App.
Share another user’s personal information without consent.
6. GPS and Mapping Accuracy
The App may use GPS and mapping data for tracking and navigation. We do not guarantee the accuracy of such data, and you assume all risk for its use.By downloading, installing, or using the [Your Hunting App Name] (the “App”), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, do not use the App.By downloading, installing, or using the [Your Hunting App Name] (the “App”), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, don’t use the App.`;

  const handleLogContent = () => {
    if (quillRef.current) {
      const html = quillRef.current.root.innerHTML;
      const delta = quillRef.current.getContents();
      const text = quillRef.current.getText();

      console.log('🟡 Delta:', delta);
      console.log('🟡 HTML:', html);
      console.log('🟡 Plain Text:', text);

      setPreviewHTML(html); // ✅ Set content for display
    }
  };

  return (
    <div className="settings-container">

      <Editor
        ref={quillRef}
        readOnly={readOnly}
        defaultValue={new Delta().insert(text)}
        onSelectionChange={setRange}
        onTextChange={setLastChange}
      />

      <div className="settings-controls">
        <button
          className="get-length-btn text-white mt-7 popbold w-[153px] h-[40px] bg-[#2765A1]"
          onClick={handleLogContent}
        >
          Update
        </button>
      </div>

      {previewHTML && (
        <div className="preview-container mt-10">
          <h3 className="preview-title">📄 Preview:</h3>
          <div
            className="preview-content"
            dangerouslySetInnerHTML={{ __html: previewHTML }}
          />
        </div>
      )}
    </div>
  );
};

export default EditSection;
