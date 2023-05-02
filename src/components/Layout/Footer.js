import React from 'react';

const footer = ( props ) => (
<footer className="footer">
©   {new Date().getFullYear() } -   {new Date().getFullYear() +1}  <span className="text-muted d-none d-sm-inline-block float-right">Fortcore Limited</span>
</footer>
);

export default footer;
