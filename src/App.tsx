import { Routes, Route } from 'react-router-dom'

import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"


const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/* public routes aka what everyone can see*/}
            <Route element={<AuthLayout />}>
                <Route path="/sign-in" element={<SigninForm />} />
                <Route path="/sign-up" element={<SignupForm />} />
            </Route>

            {/* private routes aka what only signed in people can see*/}
            <Route element={<RootLayout />}>
                <Route index element={<Home />}/>
            </Route>
        </Routes>

        <Toaster />
    </main>
  )
}

export default App