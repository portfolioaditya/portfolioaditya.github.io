// Adapted from Skiper UI Skiper40 Link000. Attribution: https://skiper-ui.com
import Link from 'next/link';
import type { ComponentProps } from 'react';
export default function AnimatedLink({className='',...props}:ComponentProps<typeof Link>){return <Link {...props} className={`skiper-link ${className}`}/>}
