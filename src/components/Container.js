import React, { Component } from "react";
import NavTabs from "./Navbar";
import About from "./pages/About";
import Blog from "./pages/Discover";
import Contact from "./pages/Search";

class Portfolio extends Component {
    state = {
        currentPage: "About"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "About") {
            return <About />;
        } else if (this.state.currentPage === "Discover") {
            return <Discover />;
        } else {
            return <Search />;
        }
    };

    render() {
        return (
            <div>
                <NavTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
            </div>
        );
    }
}

export default Portfolio;