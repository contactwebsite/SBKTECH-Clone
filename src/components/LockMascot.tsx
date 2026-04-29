'use client'
import { useEffect } from 'react'

export default function LockMascot() {
  useEffect(() => {
    const MSGS = [
      "Livraison <b>gratuite</b><br>partout au Maroc",
      "Paiement à la livraison<br><b>Zéro risque</b>",
      "<b>Garantie 2 ans</b><br>sur tous nos produits",
      "Livraison en <b>24–48h</b><br>partout au Maroc",
      "<b>+10 000</b> foyers<br>sécurisés",
      "Satisfait ou<br><b>remboursé 14j</b>",
      "Serrures digitales<br><b>BALENCIA Luxe</b>",
    ]

    const css = `
      #blc-root{position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;gap:10px;pointer-events:none}
      #blc-bubble{pointer-events:auto;background:#0a0a0a;color:#f0f0f0;font-family:'Inter',system-ui,sans-serif;font-size:11.5px;font-weight:400;line-height:1.65;letter-spacing:.02em;padding:11px 15px;border-radius:14px 14px 4px 14px;max-width:180px;text-align:center;border:1px solid rgba(255,255,255,0.07);box-shadow:0 12px 40px rgba(0,0,0,.45);opacity:0;transform:translateY(6px);transition:opacity .4s cubic-bezier(.22,1,.36,1),transform .4s cubic-bezier(.22,1,.36,1);position:relative}
      #blc-bubble.show{opacity:1;transform:translateY(0)}
      #blc-bubble::after{content:'';position:absolute;bottom:-8px;right:18px;border:5px solid transparent;border-top-color:#0a0a0a}
      #blc-btn{pointer-events:auto;width:62px;height:62px;position:relative;cursor:pointer;border:none;background:none;padding:0;outline:none;-webkit-tap-highlight-color:transparent}
      .blc-ring{position:absolute;inset:-6px;border-radius:50%;border:1.5px solid rgba(20,20,20,0.32);animation:blcRing 2.6s ease-out infinite;pointer-events:none}
      .blc-ring:nth-child(2){animation-delay:.9s;inset:-12px;border-color:rgba(20,20,20,0.16)}
      #blc-shadow{position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);width:46px;height:8px;background:radial-gradient(ellipse,rgba(0,0,0,.25) 0%,transparent 70%);border-radius:50%;animation:blcShadow 3.5s ease-in-out infinite}
      #blc-notif{position:absolute;top:2px;right:2px;width:13px;height:13px;background:#e53e3e;border-radius:50%;border:2.5px solid #fff;animation:blcNotif 2s ease-in-out infinite}
      #blc-canvas{position:absolute;inset:0;border-radius:50%;overflow:hidden;animation:blcIdle 3.5s ease-in-out infinite}
      #blc-canvas.dance{animation:blcDance 1.8s cubic-bezier(.36,.07,.19,.97) 1}
      @keyframes blcIdle{0%,100%{transform:translateY(0) rotate(-1deg)}25%{transform:translateY(-5px) rotate(1.5deg)}75%{transform:translateY(-3px) rotate(-.5deg)}}
      @keyframes blcDance{0%{transform:translateY(0) rotate(0) scale(1)}12%{transform:translateY(-10px) rotate(-6deg) scale(.95)}25%{transform:translateY(-6px) rotate(7deg) scale(1.05)}37%{transform:translateY(-12px) rotate(-5deg) scale(.97)}50%{transform:translateY(-4px) rotate(6deg) scale(1.04)}62%{transform:translateY(-9px) rotate(-4deg) scale(.98)}75%{transform:translateY(-2px) rotate(3deg) scale(1.02)}87%{transform:translateY(-5px) rotate(-2deg) scale(.99)}100%{transform:translateY(0) rotate(0) scale(1)}}
      @keyframes blcShadow{0%,100%{transform:translateX(-50%) scaleX(1);opacity:1}50%{transform:translateX(-50%) scaleX(.6);opacity:.4}}
      @keyframes blcRing{0%{transform:scale(.9);opacity:.7}100%{transform:scale(1.5);opacity:0}}
      @keyframes blcNotif{0%,100%{box-shadow:0 0 0 0 rgba(229,62,62,.5)}50%{box-shadow:0 0 0 5px rgba(229,62,62,0)}}
      @media(max-width:600px){#blc-btn{width:54px;height:54px}#blc-root{bottom:16px;right:16px}#blc-bubble{font-size:10.5px;max-width:160px}}
    `
    const style = document.createElement('style')
    style.textContent = css
    document.head.appendChild(style)

    const html = `
    <div id="blc-root">
      <div id="blc-bubble"><span id="blc-txt"></span></div>
      <button id="blc-btn" aria-label="BALENCIA assistant">
        <div class="blc-ring"></div><div class="blc-ring"></div>
        <div id="blc-notif"></div>
        <div id="blc-shadow"></div>
        <svg id="blc-canvas" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bBg" cx="38%" cy="30%" r="70%"><stop offset="0%" stop-color="#2a2a2a"/><stop offset="100%" stop-color="#050505"/></radialGradient>
            <radialGradient id="bFl" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="rgba(255,255,255,0.09)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient>
            <radialGradient id="bEy" cx="35%" cy="30%" r="65%"><stop offset="0%" stop-color="#fff"/><stop offset="60%" stop-color="#e8e8e8"/><stop offset="100%" stop-color="#ccc"/></radialGradient>
            <radialGradient id="bPu" cx="30%" cy="28%" r="65%"><stop offset="0%" stop-color="#2a2a2a"/><stop offset="100%" stop-color="#000"/></radialGradient>
            <radialGradient id="bCh" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="rgba(255,140,140,0.45)"/><stop offset="100%" stop-color="rgba(255,140,140,0)"/></radialGradient>
          </defs>
          <circle cx="32" cy="32" r="31" fill="url(#bBg)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
          <circle cx="32" cy="32" r="31" fill="url(#bFl)"/>
          <path d="M20 29 C20 14 44 14 44 29" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="7" stroke-linecap="round"/>
          <path d="M20 29 C20 14 44 14 44 29" fill="none" stroke="#1a1a1a" stroke-width="5" stroke-linecap="round"/>
          <path d="M21 29 C21 15.5 43 15.5 43 29" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="2.5" stroke-linecap="round"/>
          <rect x="14" y="27" width="36" height="30" rx="6" fill="#111" stroke="rgba(255,255,255,0.06)" stroke-width=".8"/>
          <rect x="14" y="27" width="36" height="12" rx="6" fill="rgba(255,255,255,0.04)"/>
          <ellipse cx="19" cy="41" rx="5" ry="3.5" fill="url(#bCh)"/>
          <ellipse cx="45" cy="41" rx="5" ry="3.5" fill="url(#bCh)"/>
          <ellipse cx="24" cy="38" rx="5" ry="5.5" fill="url(#bEy)"/>
          <circle id="blc-lp" cx="24.5" cy="38.5" r="2.9" fill="url(#bPu)"/>
          <circle cx="25.5" cy="37.2" r="1.1" fill="rgba(255,255,255,0.85)"/>
          <rect id="blc-ll" x="19" y="32.5" width="10" height="0" fill="#111"/>
          <ellipse cx="40" cy="38" rx="5" ry="5.5" fill="url(#bEy)"/>
          <circle id="blc-rp" cx="40.5" cy="38.5" r="2.9" fill="url(#bPu)"/>
          <circle cx="41.5" cy="37.2" r="1.1" fill="rgba(255,255,255,0.85)"/>
          <rect id="blc-rl" x="35" y="32.5" width="10" height="0" fill="#111"/>
          <path id="blc-mp" d="M25 46 Q32 50 39 46" fill="none" stroke="rgba(255,255,255,0.82)" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="32" cy="49" r="3" fill="#0a0a0a" stroke="rgba(255,255,255,0.1)" stroke-width=".6"/>
          <rect x="30.8" y="49" width="2.4" height="4" rx="1.2" fill="#0a0a0a"/>
          <path d="M14 31 Q12 40 15 52" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="2"/>
        </svg>
      </button>
    </div>`

    const div = document.createElement('div')
    div.innerHTML = html
    document.body.appendChild(div)

    const bubble = document.getElementById('blc-bubble')!
    const btxt = document.getElementById('blc-txt')!
    const canvas = document.getElementById('blc-canvas')!
    const notif = document.getElementById('blc-notif')!
    const mp = document.getElementById('blc-mp')!
    const ll = document.getElementById('blc-ll')!
    const rl = document.getElementById('blc-rl')!
    const lp = document.getElementById('blc-lp')!
    const rp = document.getElementById('blc-rp')!
    const btnEl = document.getElementById('blc-btn')!

    let idx2=0,busy=false,mIv:any,blIv:any,mPh=0

    const doBlink=()=>{
      ll.setAttribute('height','11');rl.setAttribute('height','11')
      setTimeout(()=>{ll.setAttribute('height','0');rl.setAttribute('height','0')},110)
    }
    blIv=setInterval(()=>{if(Math.random()>.25)doBlink()},3400)

    document.addEventListener('mousemove',(e:MouseEvent)=>{
      const r=btnEl.getBoundingClientRect()
      const dx=Math.max(-3,Math.min(3,(e.clientX-r.left-31)/18))
      const dy=Math.max(-2.5,Math.min(2.5,(e.clientY-r.top-31)/22))
      lp.setAttribute('cx',String(24.5+dx));lp.setAttribute('cy',String(38.5+dy))
      rp.setAttribute('cx',String(40.5+dx));rp.setAttribute('cy',String(38.5+dy))
    })

    const startMouth=()=>{mIv=setInterval(()=>{mPh=1-mPh;mp.setAttribute('d',mPh?'M25 45 Q32 52 39 45':'M25 46 Q32 50 39 46')},135)}
    const stopMouth=()=>{clearInterval(mIv);mPh=0;mp.setAttribute('d','M25 46 Q32 50 39 46')}

    const show=()=>{
      if(busy)return;busy=true
      notif.style.display='none'
      bubble.classList.remove('show')
      setTimeout(()=>{btxt.innerHTML=MSGS[idx2%MSGS.length];idx2++;bubble.classList.add('show')},320)
      canvas.classList.remove('dance');void (canvas as any).offsetWidth;canvas.classList.add('dance')
      startMouth();doBlink();setTimeout(doBlink,350)
      setTimeout(()=>{stopMouth();canvas.classList.remove('dance')},2000)
      setTimeout(()=>{bubble.classList.remove('show');busy=false},4500)
    }

    btnEl.addEventListener('click',show)
    const t1=setTimeout(show,1400)
    const iv=setInterval(()=>{if(!busy)show()},6200)

    return ()=>{
      clearTimeout(t1);clearInterval(iv);clearInterval(blIv);clearInterval(mIv)
      document.getElementById('blc-root')?.remove()
      style.remove()
    }
  },[])
  return null
}
