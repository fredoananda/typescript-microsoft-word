import React, { useState } from 'react'
import HelpQuestionDiscruss from './HelpQuestionDiscruss'

interface HelpQuestionTableResultProps {
  result: string
  onDoneClick: () => void
}

const HelpQuestionTableResult: React.FC<HelpQuestionTableResultProps> = ({
  result,
  onDoneClick,
}) => {
  const [showResult, setShowResult] = useState(true)

  const handleDoneClick = () => {
    setShowResult(false)
    onDoneClick()
  }

  if (!showResult) {
    return null // Jika showResult adalah false, tampilkan null untuk menghilangkan komponen
  }
  const handleNoClick = () => {
    // Tindakan yang dilakukan ketika tombol "No" diklik
  };

  const handleOkClick = () => {
    // Tindakan yang dilakukan ketika tombol "Ok" diklik
  };

  return (
    <div className="p-2 border rounded-lg shadow-md w-[80%] my-1 ml-[20%] bg-[#4082DE] text-slate-100">
      <div className="text-[13px] my-2">
        <div className="result-container">
          <p>{result}</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default HelpQuestionTableResult
