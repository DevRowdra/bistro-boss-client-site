import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Auth/AuthProvider.jsx'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <HelmetProvider>
       <div className='max-w-screen-xl mx-auto'>
       <RouterProvider router={router} />
       </div>
       </HelmetProvider>
    </QueryClientProvider>
      
      </AuthProvider>
  </React.StrictMode>,
)
