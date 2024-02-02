import { SidebarProvider } from "@/context/SidebarContext";
import "@/styles/globals.css";
import '../styles/Dashboard.css';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </div>
  );
}

export default App;