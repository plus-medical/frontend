import React, { useState } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import './styles.scss'

export default function UploadFile ({ accept, name }) {
  const [fileName, setFileName] = useState('Cargar Archivo')
  const handleFileUpload = () => {
    const fileNameSelected = document.getElementById('upload-file__input').value
    const fileNameResult = fileNameSelected.split('\\').pop().split('/').pop()
    setFileName(fileNameResult)
  }
  return (
    <div>
      <label className='upload-file__label'>
        <FaCloudUploadAlt className='upload-file__icon' />
        <span id='upload-file__file-selected' />
        <input
          id='upload-file__input'
          type='file'
          className='upload-file__input'
          onChange={handleFileUpload}
          accept={accept}
        />
        {fileName}
      </label>
    </div>
  )
}
