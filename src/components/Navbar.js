import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

class Navbar extends React.Component {
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isDarkTheme, darkTheme, lightTheme } = themeContext;
                    const { isLoggedIn, changeAuthStatus } = authContext;
                    const theme = isDarkTheme ? darkTheme : lightTheme;
                    return (
                        <nav style={{ background: theme.background, color: theme.text, height: '120px' }}>
                            <h2 style={{ textAlign: 'center' }} className="ui centered header">To Do List</h2>
                            <p style={{textAlign: 'center'}} onClick={ changeAuthStatus }>{ isLoggedIn ? 'Logged in' : 'Loggen out' }</p>
                            <div className="ui three buttons">
                                <button className="ui button">Overview</button>
                                <button className="ui button">Contact</button>
                                <button className="ui button">Support</button>
                            </div>
                        </nav>
                    )
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        )
    }
}

export default Navbar;