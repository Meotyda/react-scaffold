import Typography from '@material-ui/core/Typography';
import '../../../assets/styles/custom.scss';
import React from 'react';

export function MatCardTitle(props) {
    const {title} = props;

    return (
        <Typography component="h5" variant="h5" className="mb-24">
            {title}
        </Typography>
    );
}
