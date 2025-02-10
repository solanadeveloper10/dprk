import { useState } from 'react'

const Contract = () => {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = "6T3MfPXSkwLHHXKSqDyFmDcpLJTi3JaCWqMBvEBDPRK";

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        // Optionally, reset the copied status after a short delay
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Copy failed", error);
      });
  };

  return (
    <div className={'contract-wrapper'} onClick={handleCopy}>
      <p>
        CA: 6T3MfPXSkwLHHXKSqDyFmDcpLJTi3JaCWqMBvEBDPRK
      </p>
      {isCopied ? <div className='copied-text'>Copied!</div> : null}
    </div>
  )
}

export default Contract
