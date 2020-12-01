const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
    constructor() {
        this.doc = new GoogleSpreadsheet(
            '1gkB-Hb64KZamK0SsaqwDV-9Aq-3Zr86kguUukZOKjaA'
        );
    }

    async load() {
        await this.doc.useServiceAccountAuth(require('./credentials.json'));
        await this.doc.loadInfo();
    }

    async addRows(rows) {
        const sheet = this.doc.sheetsByIndex[0];
        await sheet.addRows(rows);
    }
};

// (async function () {
//     const sheet = new Sheet();
//     await sheet.load();
//     await sheet.addRows([
//         { title: 'Software Engineer', location: 'SF' },
//         { title: 'Designer', location: 'NY' },
//     ]);
// })();
