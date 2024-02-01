import { SidebarProvider } from "@/context/SidebarContext";
import "@/styles/globals.css";
import '../styles/Dashboard.css';

export default function App({ Component, pageProps }) {
  return (

    <div>
      
      <title>MindPhix</title>
      <meta name="description" content="Description of your page" />
      <link rel="icon" href="favicon.ico"/>
      
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>

    </div>
    
    
  );
}
