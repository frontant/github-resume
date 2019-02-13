import React from "react";

function PageFrame({ title, subtitle, children }){
    return (
        <section className="layout">
            <header className="layout__header">
                <h1>
                    {title}
                </h1>

                {subtitle &&
                <h2>
                    {subtitle}
                </h2>
                }
            </header>
        
            <section className="layout__body">
                {children}
            </section>
        
            <footer className="layout__footer">
                <p>
                    This app shows <b>maximum 5 repositories</b> in order to reduce
                    number of requests to the GitHub API. <a href="https://developer.github.com/v3/#rate-limiting" target="_blank">Here</a> you can read
                    more about limitations of the API.
                </p>
            </footer>
        </section>
    );
}

export default PageFrame;