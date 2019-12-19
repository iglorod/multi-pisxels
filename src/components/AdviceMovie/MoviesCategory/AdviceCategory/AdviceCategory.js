import React from 'react';

import classes from './AdviceCategory.module.css';

const adviceCategory = (props) => {
    let category = props.category.split('_');
    category[0] = category[0][0].toUpperCase() + category[0].slice(1);
    return (
        <div className={classes.category}>{category.join(' ')}</div>
    )
}

export default adviceCategory;