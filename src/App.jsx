import Contract from './Contract'
import BackgroundSlider from './BackgroundSlider'

import './App.css'

function App() {
  return <>
    <div className='color-bg' />

    <BackgroundSlider />

    <div className='wrapper'>
      <header className={'header loaded'}>
        <a href="https://x.com/N0rthKoreaMeme" target='_blank' className='social-link'>
          X
        </a>
        <a href="https://t.me/N0rthKoreaMeme" target='_blank' className='social-link'>
          Telegram
        </a>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/8cyTdbS93XEnq5cC9Kh8UHwohZNzAXNdeFipBzqaJf9j?t=1739187034010" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="https://dexscreener.com/solana/6T3MfPXSkwLHHXKSqDyFmDcpLJTi3JaCWqMBvEBDPRK" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=6T3MfPXSkwLHHXKSqDyFmDcpLJTi3JaCWqMBvEBDPRK" target='_blank' className='social-link'>
          Raydium
        </a>
      </header>

      <Contract />
    </div>

  </>
}

export default App
