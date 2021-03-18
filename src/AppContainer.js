import './App.css'
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {useState} from "react";
import App from "./App";


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#eee'};
    color: ${props => props.theme.mode === 'dark' ? '#eee' : '#111'};
  }
  .Post_item__22eS4{
    background-color: ${props => props.theme.mode === 'dark' ? '#A2F718' : '#F7001D'};
    color: ${props => props.theme.mode === 'dark' ? '#F7001D' : '#A2F718'};
  }
`


const AppContainer = () => {
    const [theme, setTheme] = useState({mode: 'dark'})
    return (
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    )

}

export default AppContainer
