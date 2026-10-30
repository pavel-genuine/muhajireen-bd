import React from 'react'

const PageTitle = (props) => {
    return (
        <section className="wpo-page-title">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <ol>
                                <li>{props.pagesub}</li>
                            </ol>
                            <h2 className="fade_bottom">{props.pageTitle}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle;




