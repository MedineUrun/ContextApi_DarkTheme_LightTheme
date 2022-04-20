import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";


class Navbar extends React.Component {
    render(){
        console.log(this.context);
        return(
        <ThemeContext.Consumer>{(context) => {
            const { isDarkTheme, darkTheme, lightTheme } = context;
            const theme = isDarkTheme ? darkTheme : lightTheme;
            return(
                <nav style={{ background: theme.background, color: theme.text, height:'120px'}}>
                    <h2 style={{ textAlign:'center'}} className="ui centered header">To Do List</h2>
                    <div className="ui three buttons">
                        <button className="ui button">Overview</button>
                        <button className="ui button">Contact</button>
                        <button className="ui button">Support</button>
                    </div>
                </nav> 
            )
            }}

        </ThemeContext.Consumer>
        )
    }
}

export default Navbar;