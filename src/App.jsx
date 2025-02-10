import Contract from './Contract'
import BackgroundSlider from './BackgroundSlider'

import './App.css'

function App() {
  return <>
    {/* <audio loop={true}>
      <source src="/letsgoriceniggas.m4a" type="audio/mp4" />
      Your browser does not support the audio element.
    </audio> */}
    <div className='color-bg' />

    <BackgroundSlider />

    <div className='wrapper'>
      <header className={'header loaded'}>
        <a href="https://x.com/DeepCommunizm" target='_blank' className='social-link'>
          X
        </a>
        <a href="https://t.me/DeepCommunizm" target='_blank' className='social-link'>
          Telegram
        </a>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/FeB9v9sio2oVRwCjFSyPti4PenYK7cAPoq1dYY97cLAv?t=1737997474072" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="https://dexscreener.com/solana/FgkbcKNeSJtQGZ4WEweRWh8kSveoJvszdbX9CKMdeep" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=FgkbcKNeSJtQGZ4WEweRWh8kSveoJvszdbX9CKMdeep" target='_blank' className='social-link'>
          Raydium
        </a>
      </header>

      <Contract />
    </div>

  </>
}

export default App
