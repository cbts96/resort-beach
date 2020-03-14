import React from 'react'
import { Hero } from '../component/Hero';
import Banner  from '../component/Banner';
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div>
            <Hero>
                <Banner title="404" subtitle="page not found">
                    <Link to="/" className="btn-primary">back to home</Link>
                </Banner>
            </Hero>
        </div>
    )
}
export default Error;