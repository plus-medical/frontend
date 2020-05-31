import React, { useState } from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import './styles.scss'

export default function DownFile ({ accept }) {
  const [fileName, setFileName] = useState('Descargar Archivo')

  const handleFileUpload = () => {
    const fileNameSelected = document.getElementById('upload-file__input').value
    const fileNameResult = fileNameSelected.split('\\').pop().split('/').pop()
    setFileName(fileNameResult)
  }
  return (
    <div>
      <label className='upload-file__label'>
        <FaCloudDownloadAlt className='upload-file__icon' />
        <span id='upload-file__file-selected' />
        <input
          id='upload-file__input'
          name='fileName'
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
