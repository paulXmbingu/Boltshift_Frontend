import React, { useEffect, useState } from 'react';

const App = () => {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      if (!isAppInstalled()) {
        event.preventDefault();
        setShowInstallPrompt(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const isAppInstalled = () => {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  };

  const handleInstallClick = async () => {
    if (!showInstallPrompt) return;
    const promptEvent = await window.deferredPrompt.prompt();
    if (promptEvent) {
      promptEvent.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setShowInstallPrompt(false);
      });
    }
  };

  return (
    <div>
      <h1>My React PWA</h1>
      {showInstallPrompt && (
        <button onClick={handleInstallClick}>
          Install App
        </button>
      )}
    </div>
  );
};

export default App;
