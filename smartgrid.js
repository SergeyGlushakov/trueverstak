const smartgrid = require('smart-grid');

smartgrid('./source/style/layout/', {
    mobileFirst: false,
    outputStyle: "scss",
    columns: 24,
    offset: "15px",
    container: {
        maxWidth: "1140px",
        fields: "30px"
    },
    breakPoints: {
        lg: {
            width: "1139.99px"
        },
        md: {
            width: "991.99px",
        },
        sm: {
            width: "767.99px",
        },
        xs: {
            width: "575.99px"
        }
    },
});