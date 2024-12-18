import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:"app",
      remotes:{
        mfeApp1:"http://localhost:6001/assets/remoteEntry.js",
        mfeApp2:"http://localhost:6002/assets/remoteEntry.js",
      },
      shared:["react", "react-dom"]
     })
  ],
  build:{
    modulePreload:false,
    target:"esnext",
    minify:false,
    cssCodeSplit:false
  }
})
