const express = require('express')
const app = express()
const cors = require('cors');

const publicWeb = __dirname + '/dist/pim-hotel';

app.use(cors({ origin: '*' }));

app.use(express.static(publicWeb))

app.get('mensagens', (req, res) => {

    while (1) {
        setTimeout(() => {
            return res.send({ message: 'ui ui' })
        }, 4000);
    }

})

app.get('*', (req, res) => {
    res.sendFile('index.html', { root: publicWeb });
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta interna 8080")
});
