import React from 'react';

interface HelpQuestionDiscrussProps {
  onNoClick: () => void;
  onOkClick: () => void;
}

const HelpQuestionDiscruss: React.FC<HelpQuestionDiscrussProps> = ({
  onNoClick,
  onOkClick,
}) => {
  return (
    <div className="p-2 border rounded-lg shadow-md w-[80%] my-1 ml-[20%] bg-[#4082DE] text-slate-100">
      <div className="text-[13px] my-2">
        <div className="result-container">
         
        </div>
      </div>
      <hr />
      <p className="my-1">Are you satisfied with our answer?</p>
      <div className="flex justify-between">
        <button
          className="rounded-full bg-[#0043A1] px-3 py-1 w-[48%] hover:bg-[#0b3875]"
          onClick={onNoClick}
        >
          No, I want to discuss it more
        </button>
        <button
          className="rounded-full bg-[#0043A1] px-3 py-1 w-[48%] hover:bg-[#0b3875]"
          onClick={onOkClick}
        >
          Oke
        </button>
      </div>
    </div>
  );
};

export default HelpQuestionDiscruss;
