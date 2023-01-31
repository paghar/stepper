import type {AppProps} from "next/app";
import Layout from "../layouts/layout.tsx";
import {Provider} from "react-redux";
import store from "../redux/store";
import "tailwindcss/tailwind.css";


export default function App({Component, pageProps}: AppProps) {
    return(
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
       
    );   
}
