import React, { useState, useRef } from 'react'
import HelpQuestionTableResult from './HelpQuestionTableResult'
import HelpQuestionDiscruss from './HelpQuestionDiscruss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBold,
  faItalic,
  faListUl,
  faQuoteRight,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faPaperclip,
  faImage,
} from '@fortawesome/free-solid-svg-icons'

const HelpQuestionTable = (props: any) => {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [yesButtonClicked, setYesButtonClicked] = useState(false)

  const handleSendClick = () => {
    setResult(text)
  }

  const handleDoneClick = () => {
    setInputValue('')
    setShowResult(false)
    // Logika lain yang ingin Anda tambahkan setelah selesai
  }
  const handleOkClick = () => {
    // Logika ketika tombol OK diklik
    // Anda dapat melakukan tindakan yang diperlukan
    setShowResult(false)
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }
  const handleChecklistChange = () => {
    setShowResult(!showResult)
  }
  const handleYesButtonClick = () => {
    if (showResult && yesButtonClicked) {
      // Tindakan yang akan diambil jika checklist dicentang dan tombol "Yes" diklik
      console.log('Yes button clicked and checklist is checked.')
    } else {
      // Tindakan yang akan diambil jika checklist tidak dicentang atau tombol "Yes" belum diklik
      console.log('Yes button clicked and checklist is not checked.')
    }
  }

  const handleBoldClick = () => {
    setIsBold(!isBold)
  }
  const [isBold, setIsBold] = useState(false)

  const [isItalic, setIsItalic] = useState(false)
  const handleItalicClick = () => {
    setIsItalic(!isItalic)
  }
  const [bulletsActive, setBulletsActive] = useState(false)
  const handleBulletsClick = () => {
    setBulletsActive(!bulletsActive)
  }
  const [quotesActive, setQuotesActive] = useState(false)
  const [alignLeftActive, setAlignLeftActive] = useState(false)
  const handleQuotesClick = () => {
    setQuotesActive(!quotesActive)
  }
  const handleAlignLeftClick = () => {
    setAlignLeftActive(!alignLeftActive)
  }
  const handleAlignCenterClick = () => {
    // Implement align center functionality
  }

  const handleAlignRightClick = () => {
    // Implement align right functionality
  }
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [fileAttached, setFileAttached] = useState(false)
  const handleAttachFileClick = () => {
    // Logic untuk mengunggah file
    // Misalnya, menggunakan input[type="file"] yang tersembunyi
    inputFileRef.current!.click()
  }
  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0]

    // Lakukan logika yang sesuai untuk mengelola file yang diunggah
    // Misalnya, simpan file ke state, lakukan pengolahan, atau kirim ke server
    console.log('File selected:', selectedFile)

    // Set state fileAttached menjadi true setelah file diunggah
    setFileAttached(true)
  }
  const [selectedImage, setSelectedImage] = useState(null)
  const handleAddPictureClick = () => {
    inputFileRef.current!.click()
  }
  const handleImageChange = (event: any) => {
    const selectedFile = event.target.files[0]

    // Lakukan logika yang sesuai untuk mengelola gambar yang dipilih
    // Misalnya, simpan gambar ke state atau kirim ke server
    setSelectedImage(selectedFile)
  }
  const handleNoClick = () => {
    // Tindakan yang dilakukan ketika tombol "No" diklik
  }

export default function Home() {
  return (
    
    <table className=" w-[100%] h-full ">
      <thead>
        <tr className="text-center border-b-2 border-slate-500 text-sm">
          <th className="w-[1%]">No.</th>
          <th className="w-[5%]">Select</th>
          <th className="w-[5%]">Status & Number</th>
          <th className="w-[25%]">Category & Thumbnail</th>
          <th className="w-[65%]">Content</th>
        </tr>
      </thead>
      <tbody>
        {props.Dummy.map((item: any, index: number) => {
          return (
            <tr key={index} className="text-sm">
              <td className="w-2 text-center">{index + 1}</td>
              <td className="text-center">
                <input type="checkbox" />
              </td>
              <td
                className={
                  index % 2 === 0
                    ? 'bg-[#FFE500] h-20 w-48 font-semibold text-xs '
                    : 'bg-[#0043A1] h-20 text-white w-5 font-semibold text-xs'
                }
              >
                <div className="h-full flex flex-col justify-around p-4">
                  <p className="text-center">{item.isReported}</p>
                  <p className="text-center items-end">
                    {item.shipping_expedition.tracking_number}
                  </p>
                </div>
              </td>
              <td
                className={
                  index % 2 === 0
                    ? 'bg-[#ECF3FC] h-36 p-2 w-10 text-left'
                    : 'bg-[#FAFAFA] h-36 text-black p-2 w-10'
                }
              >
                <div className="h-full">
                  <div className=" text-xs font-semibold flex justify-between">
                    <div>
                      <p className="text-[11px]">
                        NO TRANSACTION :{' '}
                        <span className="text-[9px]">{item.transactionId}</span>{' '}
                      </p>
                    </div>
                    <div className="bg-[#0043A1] p-1 text-white rounded">
                      <p>Discution</p>
                    </div>
                  </div>
                  <p className="text-[12px]">
                    <span className="font-bold text-xs">Email : </span>
                    {item.email}
                  </p>
                  <p>Lorem ipsum Quam, ipsum explicabo nobis incidunt</p>
                  <div>
                    <p>{item.statusItem.date}</p>
                  </div>
                </div>
              </td>
              {index === 0 && (
                <td rowSpan={6} className=" w-[55%] p-2 ">
                  <div className="flex flex-col h-full">
                    <div className="flex">
                      <p className="font-bold">
                        NO TRANSACTION :{' '}
                        <span className="text-xs font-semibold">
                          {' '}
                          {item.transactionId}
                        </span>
                      </p>
                    </div>
                    <p className="font-bold">
                      Email :{' '}
                      <span className="text-xs font-semibold">
                        {item.email}
                      </span>
                    </p>
                    <h2 className="text-2xl font-bold my-2">
                      Please review lorem ipsum dolor sit amet
                    </h2>
                    <div className="p-2 border rounded-lg shadow-md w-[80%] my-1">
                      <p className="text-[#0043A1] font-semibold">Yamasuda</p>
                      <div className="text-[13px] my-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur tempor lobortis leo, sit amet dapibus erat
                        porta vitae. Vestibulum posuere id urna ac imperdiet.
                        Nam volutpat dui elit, eu aliquam arcu malesuada non.
                        Cras rutrum mi et fringilla tincidunt. Nunc luctus arcu
                        odio, porttitor egestas libero scelerisque vel. Ut
                        consequat nunc a lacinia dignissim. Etiam dui ex,
                        imperdiet eu arcu ac, congue iaculis augue. Quisque
                        luctus orci
                      </div>
                      <p className="text-xs font-semibold text-gray-400">
                        November,13 2023 09:30
                      </p>
                    </div>

                    {showResult && (
                      <HelpQuestionTableResult
                        result={result}
                        onDoneClick={handleDoneClick}
                      />
                    )}

                    {showResult && (
                      <HelpQuestionDiscruss
                        onNoClick={handleSendClick}
                        onOkClick={handleOkClick}
                      />
                    )}

                    {!showResult && (
                      <HelpQuestionTableResult
                        result={result}
                        onDoneClick={handleDoneClick}
                      />
                    )}
                    <div className="bg-[#FAFAFA]">
                      <p>Case : #2344</p>
                      <div className="text-editor">
                        <div className="content">
                          <textarea
                            className="text-area"
                            placeholder="Type your text here"
                            value={text}
                            onChange={handleTextChange}
                            style={{
                              fontWeight: isBold ? 'bold' : 'normal',
                              fontStyle: isItalic ? 'italic' : 'normal',
                              listStyleType: bulletsActive ? 'disc' : 'none',
                              borderLeft: quotesActive
                                ? '4px solid gray'
                                : 'none',
                              textAlign: alignLeftActive ? 'left' : 'initial',
                            }}
                          ></textarea>
                        </div>
                        <div className="footer">
                          <div className="toolbar">
                            <select className="font-type-select1">
                              <option value="Arial">Paragraph</option>
                              <option value="Helvetica">Helvetica</option>
                              <option value="Times New Roman">
                                Times New Roman
                              </option>
                            </select>
                            <div
                              className="toolbar-button"
                              onClick={handleBoldClick}
                            >
                              <FontAwesomeIcon icon={faBold} />
                            </div>
                            <div
                              className="toolbar-button"
                              onClick={handleItalicClick}
                            >
                              <FontAwesomeIcon icon={faItalic} />
                            </div>
                            <div
                              className="toolbar-button"
                              onClick={handleBulletsClick}
                            >
                              <FontAwesomeIcon icon={faListUl} />
                            </div>
                            <div
                              className="toolbar-button"
                              onClick={handleQuotesClick}
                            >
                              <FontAwesomeIcon icon={faQuoteRight} />
                            </div>
                            <div
                              className="toolbar-button"
                              onClick={handleAlignLeftClick}
                            >
                              <FontAwesomeIcon icon={faAlignLeft} />
                            </div>
                            <div
                              className="toolbar-button"
                              onClick={handleAlignCenterClick}
                            >
                              <FontAwesomeIcon icon={faAlignCenter} />
                            </div>
                            <div
                              className="toolbar-button"
                              onClick={handleAlignRightClick}
                            >
                              <FontAwesomeIcon icon={faAlignRight} />
                            </div>
                            <input
                              type="file"
                              ref={inputFileRef}
                              style={{ display: 'none' }}
                              onChange={handleFileChange}
                            />

                            <div
                              className="toolbar-button"
                              onClick={handleAttachFileClick}
                            >
                              <FontAwesomeIcon icon={faPaperclip} />
                            </div>
                            <input
                              type="file"
                              ref={inputFileRef}
                              style={{ display: 'none' }}
                              onChange={handleImageChange}
                            />

                            <div
                              className="toolbar-button"
                              onClick={handleAddPictureClick}
                            >
                              <FontAwesomeIcon icon={faImage} />
                            </div>
                          </div>
                        </div>
                        <div className="containertype">
                          <select className="font-type-select2">
                            <option value="Arial">Arial</option>
                            <option value="Helvetica">Helvetica</option>
                            <option value="Times New Roman">
                              Times New Roman
                            </option>
                          </select>
                          <div>
                            <select className="font-size-select">
                              <option value="12">size</option>
                              <option value="12">12</option>
                              <option value="14">14</option>
                              <option value="16">16</option>
                            </select>
                          </div>
                        </div>
                        <div className="checklist-container">
                          <label>
                            <input
                              type="checkbox"
                              className="checklist-input"
                              checked={showResult}
                              onChange={handleChecklistChange}
                            />
                            <span className="checklist-text">
                              Are you satisfied with our answer?
                            </span>
                          </label>
                          <div className="button-container">
                            <button className="no-button">
                              No, I want to discuss it more
                            </button>
                            <button
                              className="yes-button"
                              onClick={() => setYesButtonClicked(true)}
                            >
                              Yes
                            </button>
                          </div>
                          <div className="button-container button-container-right">
                            <button
                              className="yes-button"
                              onClick={handleSendClick}
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              )}
            </tr>
          )
        })}
        <style>
          {`
    .text-editor-container {
      display: flex;
  flex-direction: column;
  align-items: flex-start;
    }
    
    .text-editor {
      width: 100%;
      height: 400px;
      border: 1px solid #ccc;
      padding: 10px;
      display: flex;
      flex-direction: column;
      padding-right: 10px; 
    }
    
    .content {
      flex-grow: 1;
    }
    
    .font-type-select option {
      font-size: 10px;
      text-align: center;
    }
    
    .text-area {
      width: 100%;
      height: 100%;
      resize: none;
    }
    
    .footer {
      display: flex;
      align-items: center;
      padding-top:4px
    }
    
  .containertype{
    display: flex;
  justify-content: space-between;
  }

    .font-type-select1 {
      
      width: 100px;
      height: 30px;
      font-size: 11px;
      padding: 2px;
      text-align: center;
  
    }
    
    .font-type-select2 {
      margin-top: 5px;
      margin-right: 5px;
      width: 100px;
      height: 30px;
      font-size: 11px;
      padding: 2px;
      text-align: center;
      
  
    }
    
    .font-size-select {
      margin-right: 17rem;
      width: 100px;
      height: 30px;
      font-size: 11px;
      padding: 2px;
      text-align: center;
      margin-top:5px;
    }
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      margin-right: 10px;
      margin-bottom: 3px;
      padding-left:1px
    }
    
    .toolbar-button {
      display: flex;
      align-items: center;
      margin-right: 10px;
      padding: 1px;
      padding-top:4px
    }
    
    .symbol {
      margin: 1px;
    }
    .checklist-container {
      display: flex;
      flex-direction: column;
    }
    
    .checklist-text {
      margin-left: 10px;
    }
    
    .button-container {
      display: flex;
      margin-top: 10px;
    }
    
    .no-button,
    .yes-button {
      padding: 8px 25px; /* Mengurangi padding untuk ukuran yang lebih kecil */
      margin: 0 5px;
      line-height: 10px;
    }
    
    .no-button {
      font-size: 11px; /* Mengurangi ukuran font untuk ukuran yang lebih kecil */
      background-color: white;
      color: blue;
      border-radius: 6px;
      width: 230px; /* Memperpanjang lebar tombol */
      border: 2px solid blue;
    }
    
    .yes-button {
      font-size: 11px; /* Mengurangi ukuran font untuk ukuran yang lebih kecil */
      background-color: blue;
      color: white;
      border-radius: 6px;
      width: 200px; /* Menyesuaikan lebar tombol */
    }
    .button-container-right {
      margin-top:40px;
      display: flex;
      justify-content: flex-end;
    }
    `}
        </style>
      </tbody>
    </table>
  )
}

export default HelpQuestionTable