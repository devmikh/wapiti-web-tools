import { useState, useEffect } from 'react'
import QRCode from 'qrcode'
import Textarea from '../../../core/Textarea'
import Button from '../../../core/Button'
import usePageTitle from '../../../../hooks/usePageTitle'
import styles from './index.module.css'

export default function QRCodeGenerator() {
    
    const [input, setInput] = useState<string>('')
    const [qrCodeDataUrl, setQRCodeDataUrl] = useState('')

    const generateQRCode = () => {
        QRCode.toDataURL(input, { width: 300, errorCorrectionLevel: 'H' })
            .then((url: string) => {
                setQRCodeDataUrl(url)
            })
            .catch((error: any) => {
                console.error('Error generating QR code:', error)
            })
    }

    const downloadQRCode = () => {
        const downloadLink = document.createElement('a')
        downloadLink.href = qrCodeDataUrl
        downloadLink.download = 'qrcode.png'
        downloadLink.click()
    }
    
    useEffect(() => {
        if (input) {
            generateQRCode()
        } else {
            setQRCodeDataUrl('')
        }
    }, [input])

    usePageTitle('QR Code Generator')

    return (
        <div className={`tool-container ${styles['container']}`}>
            <h1 className='tool-title'>QR Code Generator</h1>
            <Textarea
                value={input}
                small
                placeholder='Enter text or website URL'
                maxLength={1200}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
            {qrCodeDataUrl && (
                <div className={styles['qr-code-container']}>
                    <Button label='Clear' onClick={() => setInput('')} />
                    <img src={qrCodeDataUrl} alt="QR Code" className={styles['qr-code-container-img']} />
                    <Button onClick={downloadQRCode} label='Download' color='primary' />
                </div>
            )}
        </div>
    )
}
