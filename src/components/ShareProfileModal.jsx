import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { 
  X, 
  Copy, 
  Check, 
  Share2, 
  QrCode, 
  Smartphone, 
  Globe 
} from 'lucide-react';

export function ShareProfileModal({ data, isOpen, initialTab = 'apps', onClose, onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('apps'); // 'apps' | 'qr'
  const [qrImage, setQrImage] = useState('');
  const [qrError, setQrError] = useState(false);

  const isLocalAddress = typeof window !== 'undefined' && /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);
  const currentUrl = typeof window !== 'undefined' && !isLocalAddress
    ? `${window.location.origin}${window.location.pathname}`
    : (data.websiteUrl || 'https://rahulparida.in/');
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedText = encodeURIComponent(`${data.shareText} ${data.name}\n`);

  useEffect(() => {
    if (isOpen) setActiveTab(initialTab);
  }, [initialTab, isOpen]);

  useEffect(() => {
    if (!isOpen || activeTab !== 'qr') return;
    let cancelled = false;
    setQrImage('');
    setQrError(false);
    QRCode.toDataURL(currentUrl, {
      errorCorrectionLevel: 'H',
      margin: 2,
      width: 360,
      color: { dark: '#172c24', light: '#ffffff' }
    }).then((url) => {
      if (!cancelled) setQrImage(url);
    }).catch(() => {
      if (!cancelled) setQrError(true);
    });
    return () => { cancelled = true; };
  }, [activeTab, currentUrl, isOpen]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      onShowToast('Profile link copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      onShowToast('Link copied!');
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: data.name,
          text: data.shareText,
          url: currentUrl,
        });
        onShowToast('Shared successfully!');
      } catch (err) {
        // user dismissed share
      }
    } else {
      handleCopy();
    }
  };

  const shareChannels = [
    {
      name: 'WhatsApp',
      color: '#25D366',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.352.226-.653.075-1.804-.903-2.982-1.608-4.17-3.649-.313-.538.313-.499.896-1.666.098-.2.05-.376-.025-.526-.075-.15-.678-1.633-.929-2.238-.244-.589-.493-.509-.678-.518-.176-.009-.377-.01-.578-.01-.201 0-.528.075-.804.376-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.08 2.912 1.23 3.113.15.201 2.124 3.243 5.145 4.549.718.311 1.28.497 1.717.636.721.23 1.377.198 1.896.12.578-.088 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.352z"/>
          <path d="M12 2a9.93 9.93 0 0 0-8.625 15.01L2 22l5.14-1.348A9.97 9.97 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.64 0-3.19-.48-4.52-1.31l-.32-.2-3.36.88.9-3.27-.21-.34A8.17 8.17 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z"/>
        </svg>
      ),
      url: `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`
    },
    {
      name: 'Facebook',
      color: '#1877F2',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    },
    {
      name: 'Telegram',
      color: '#0088cc',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.94 9.15c-.14.65-.53.81-1.07.51l-2.96-2.18-1.43 1.38c-.16.16-.29.29-.6.29l.21-3.03 5.52-4.99c.24-.21-.05-.33-.37-.12l-6.82 4.29-2.94-.92c-.64-.2-.65-.64.13-.95l11.5-4.43c.53-.19 1 .13.77 1.08z"/>
        </svg>
      ),
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`
    },
    {
      name: 'Twitter / X',
      color: '#0f1419',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`
    }
  ];

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div 
        className="modal-content-card share-sheet-popup animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          type="button" 
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close Share Sheet"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="share-sheet-header">
          <div className="share-sheet-profile-mini">
            <img src={data.logo} alt={data.name} className="share-mini-logo" />
            <div>
              <h3 className="share-sheet-title">{data.name}</h3>
              <p className="share-sheet-subtitle">{data.username}</p>
            </div>
          </div>
        </div>

        {/* Tabs: Share / QR */}
        <div className="share-sheet-tabs">
          <button 
            type="button" 
            className={`share-tab-btn ${activeTab === 'apps' ? 'active' : ''}`}
            onClick={() => setActiveTab('apps')}
          >
            <Share2 size={16} />
            <span>Share Link</span>
          </button>
          <button 
            type="button" 
            className={`share-tab-btn ${activeTab === 'qr' ? 'active' : ''}`}
            onClick={() => setActiveTab('qr')}
          >
            <QrCode size={16} />
            <span>QR Code</span>
          </button>
        </div>

        {activeTab === 'apps' ? (
          <div className="share-apps-content">
            {/* Social Icons Grid */}
            <div className="share-channels-grid">
              {shareChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-channel-btn"
                >
                  <div 
                    className="channel-icon-circle"
                    style={{ backgroundColor: channel.color, color: '#ffffff' }}
                  >
                    {channel.icon}
                  </div>
                  <span className="channel-label">{channel.name}</span>
                </a>
              ))}
            </div>

            {/* Native Share Button (Mobile) */}
            {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
              <button 
                type="button" 
                className="native-share-trigger-btn"
                onClick={handleNativeShare}
              >
                <Smartphone size={18} />
                <span>More Share Options</span>
              </button>
            )}

            {/* Copy Link Input Bar */}
            <div className="copy-link-box">
              <input 
                type="text" 
                readOnly 
                value={currentUrl} 
                className="copy-link-input"
              />
              <button 
                type="button" 
                className={`copy-link-action-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopy}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="qr-code-content animate-fade-in">
            <div className="qr-card-wrapper">
              <div className="qr-code-art">
                {qrImage ? <img src={qrImage} alt={`Scan to visit ${data.name}`} width="240" height="240" className="qr-svg" /> : <p role="status">{qrError ? 'Could not create QR code. Please try again.' : 'Creating scannable QR code…'}</p>}
              </div>
              <p className="qr-instruction">Scan this QR code with any camera or UPI app to view profile</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShareProfileModal;
