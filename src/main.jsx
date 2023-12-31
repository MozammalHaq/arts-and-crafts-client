import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Create a client
// const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        {/* <QueryClientProvider client={queryClient}> */}
        <RouterProvider router={router} />
        {/* </QueryClientProvider> */}
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
