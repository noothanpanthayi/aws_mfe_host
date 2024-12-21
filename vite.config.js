import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:"app",
      remotes:{
        // mfeApp1:"https://main.d1294rbaaroizz.amplifyapp.com/assets/remoteEntry.js",
        // mfeApp2:"https://main.d6col50lk7dxx.amplifyapp.com/assets/remoteEntry.js",
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
  },
  server: { 
    cors: { 
    port:'5173',
    origin: '*',  
    methods: ['GET', 'POST', 'OPTIONS'],  
    allowedHeaders: ['Content-Type', 'Authorization'], 
     }
    }
  });