"use client";
// Adapted from Vengeance UI FlipText (MIT). See THIRD_PARTY_NOTICES.md.
import {useMemo, type CSSProperties} from 'react';
export default function FlipText({children}:{children:string}){
 const words=useMemo(()=>children.split(' '),[children]);let index=0;
 return <span className="flip-text" aria-label={children}>{words.map((word,i)=><span className="flip-word" aria-hidden="true" key={i}>{word.split('').map((char,j)=>{const delay=Math.sin(index++/children.length*Math.PI/2)*.3;return <span key={j} className="flip-char" style={{'--flip-delay':`${delay}s`} as CSSProperties}>{char}</span>})}{i<words.length-1?'\u00a0':''}</span>)}</span>
}
