import React from 'react'
import Title from '../Title'
import bg_about from '../../../images/bg_about.jpg'
export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img 
                        src         ={bg_about}
                        className   ="img-fluid img-thumbnail"
                        style       ={{ background : "var(--darkGrey)" }}
                        alt="banner about"
                        />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="About Us"/>
                        <p className="text-lead text-muted my-3 text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <p className="text-lead text-muted my-3 text-justify">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <button 
                            className   ="main-link"
                            type        ="button"
                            style       ={{marginTop : "5px"}}
                        >More Info
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
