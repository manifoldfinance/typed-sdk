manifold-sdk-js
==========


-----

**Features:**

- Keep your private keys in your client, **safe** and sound
- Import and export **JSON wallets**
- Import and export BIP 39 **mnemonic phrases** (12-word backup phrases) and HD wallets (English, Italian, Japanese, Korean, Simplified Chinese, Traditional Chinese; more coming soon)
- Connect to Maxonrow nodes over `JSON-RPC`.
- **Aliases names** are first-class citizens; it can be used to log in any Maxonrow services
- **Complete** functionality for all your Maxonrow needs
- Extensive [documentation](https://docs.maxonrow.com/manifold-sdk-js)
- Large collection of **test cases** which are maintained and added to
- Fully **TypeScript**-ready, with definition files and full TypeScript source
- **MIT License** (including ALL dependencies); completely open source, tweak as you please

-----

Compiling the source code
-------------------------

To install all dependecies and build the source code run `make build`.


Installing in Node.js
---------------------

Install the manifold-sdk-js library from your project directory::

    npm install --save manifold-sdk-js

Importing
---------

**JavaScript (ES3)**

    var manifold = require('manifold-sdk-js');

**JavaScript (ES5 or ES6)**

    const manifold = require('manifold-sdk-js');

**JavaScript (ES6) / TypeScript**

    import { manifold } from 'manifold-sdk-js';

-----

Acknowledgement
---------------

portions from `ethers.js`


### License 

MIT
