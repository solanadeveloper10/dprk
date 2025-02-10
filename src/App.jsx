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
          <img src="/icons/x.png" alt="X icon." className='social-link-image' />
          <span>X</span>
        </a>
        <a href="https://t.me/N0rthKoreaMeme" target='_blank' className='social-link'>
          <img src="/icons/tg.png" alt="Telegram icon." className='social-link-image' />
          <span>Telegram</span>
        </a>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/8cyTdbS93XEnq5cC9Kh8UHwohZNzAXNdeFipBzqaJf9j?t=1739187034010" target='_blank' className='social-link'>
          <img src="/icons/dextools.png" alt="Dextools icon." className='social-link-image' />
          <span>Dextools</span>
        </a>
        <a href="https://dexscreener.com/solana/6T3MfPXSkwLHHXKSqDyFmDcpLJTi3JaCWqMBvEBDPRK" target='_blank' className='social-link'>
          <img src="/icons/dexscreener.png" alt="Dexscreener icon." className='social-link-image' />
          <span>Dexscreener</span>
        </a>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=6T3MfPXSkwLHHXKSqDyFmDcpLJTi3JaCWqMBvEBDPRK" target='_blank' className='social-link'>
          <img src="/icons/raydium.png" alt="Raydium icon." className='social-link-image' />
          <span>Raydium</span>
        </a>
      </header>

      <Contract />
    </div>

  </>
}

export default App
