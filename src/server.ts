import express from 'express'

const app = express();
const port = 3000;

app.get('/', (resquest, response) => {
    response.send(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body
        style="background-color: #fefe; display: flex; align-items: center; justify-content: center; flex-direction: column;">

        <h1 style="margin-bottom: 150px;">Hello World</h1>

        <a href="/bsms">Vá para a pagina BSM</a>
    </body>
    
    </html>`);
});

app.get('/bsms', (request, response) => {
    response.send(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body
        style="background-color: #fefe; display: flex; align-items: center; justify-content: center; flex-direction: column;">
        <h1 style="font-size: 50px; margin-bottom: 20px;">BSM's</h1>
    
        <h2>Mentalidades</h2>
    
        <p>Persistencia</p>
        <p>Responsabilidade Pessoal</p>
        <p>Orientação ao Futuro</p>
        <p>Mentalidade de Crescimento</p>
    
        <h2>Habilidades</h2>
        <p>Trabalho em equipe</p>
        <p>Atenção aos detalhes</p>
        <p>Proatividade</p>
        <p>Comunicação</p>
    
        <a href="/objetivos">vá para os objetivos da semana</a>
    
    </body>

    </html>`)
})

app.get('/objetivos', (request, response) => {
    response.send(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body
    style="background-color: #fefe; display: flex; align-items: center; justify-content: center; flex-direction: column;">
    <h1 style="font-size: 50px; margin-bottom: 20px;">Objetivos da Semana</h1>

    <h2>Aprender coisas novas e resolver problemas junto com o meu grupo</h2>

    <a href="/">volte para pagina inicial</a>

</body>

</html>`)
})





app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port} e tudo ok!`);

});