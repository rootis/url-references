const fs = require('fs');

fs.writeFileSync('./dist/url-references/_redirects', '/*    /index.html   200');
