import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    envPrefix: 'VITE_', // Ensures that only variables that start with VITE_ are exposed
    build: {
        sourcemap: true, // Enable source maps for all builds
    },
    server: {
        port: 3000, // Optional: define a specific port for development
    }
})
