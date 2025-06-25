'use client'

import { Studio } from 'sanity'
import config from '../../../sanity.config'

export default function AdminPage() {
  return (
    <div style={{ 
      height: '100vh', 
      width: '100%',
      margin: 0, 
      padding: 0,
      overflow: 'hidden',
      background: 'white'
    }}>
      <Studio config={config} />
    </div>
  )
} 