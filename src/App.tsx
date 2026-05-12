import { Routes, Route } from 'react-router';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Pricing from '@/pages/Pricing';
import Product from '@/pages/Product';
import Security from '@/pages/Security';
import UseCase from '@/pages/UseCase';
import Integrations from '@/pages/Integrations';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import About from '@/pages/About';
import Changelog from '@/pages/Changelog';
import Demo from '@/pages/Demo';
import Waitlist from '@/pages/Waitlist';
import NotFound from '@/pages/NotFound';
import { Databuddy } from "@databuddy/sdk/react";

export default function App() {
  return (
    <Layout>
      <Databuddy clientId={import.meta.env.VITE_DATABUDDY_CLIENT_ID!} trackWebVitals trackErrors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/security" element={<Security />} />
        <Route path="/use-cases/:persona" element={<UseCase />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
