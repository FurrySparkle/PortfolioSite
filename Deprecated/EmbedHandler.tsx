import { useEffect } from 'react';

function EmbedHandler() {
  useEffect(() => {
    fetch('https://player.twitch.tv/js/embed/v1.js')
      .then(response => response.text())
      .then(script => {
        const scriptEl = document.createElement('script');
        scriptEl.innerHTML = script;
        document.body.appendChild(scriptEl);
      });
  }, []);

  return <div>{EmbedHandler()}</div>;
}

export default EmbedHandler;
