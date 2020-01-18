import React from 'react';

import LinkBlock from './LinkBlock/LinkBlock';
import classes from './LinksBlock.module.css';

const linksBlock = () => {
    return (
        <div className={classes.footerLinks}>
            <ul>
                <LinkBlock text='Id leo in vitae turpis' />
                <LinkBlock text='Eros donec ac odio tempor' />
                <LinkBlock text='Budget lorem dolor sed' />
            </ul>
        </div>
    )
}

export default linksBlock;