'use client'

import React from 'react';
import { motion } from 'framer-motion';

export default function PortfolioLanding() {
  return (
    <div className="flex items-center justify-center w-[90vw] h-[90vh] overflow-hidden">
      <motion.div
        initial={{ opacity: '100%', backgroundColor: '#444444'}}
        animate={{ opacity: '100%', backgroundColor: '#EFE8DD'}}
        transition={{duration: 0.8, ease:'easeIn'}}
        style={{
          backgroundColor: '#EFE8DD',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      />
    </div>
  )
}