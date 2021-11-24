const express = require('express');
const app = express();

app.use(express.json());

const estudiantes = [
    {Id: 1, Nombre: 'Ana', Edad: 24, enroll: true},
    {Id: 2, Nombre: 'Juan', Edad: 54, enroll: false},
    {Id: 3, Nombre: 'Diego', Edad: 35, enroll: false},
];

app.get('/', (req, res) => {
    res.send('Prueba API Rest Harold Bolaños');
});

app.get('/api/estudiantes', (req, res) => {
    res.send(estudiantes);
});

app.get('/api/estudiantes/:id', (req, res) => {
    const estudiante = estudiantes.find(c => c.Id === parseInt(req.params.id));
    if(!estudiante) return res.status(404).send('Estudiante no encontrado');
    else res.send(estudiante);

    })

    app.post('/api/estudiantes', (req, res) => {
        const estudiante = {
            Id: estudiantes.length + 1,
            Nombre: req.body.Nombre,
            Edad: parseInt(req.body.Edad),
            enroll: (req.body.enroll === 'true')
        };

        estudiantes.push(estudiante);
        res.send(estudiante);

        });

    app.delete('/api/estudiantes/:id', (req, res) => {
        const estudiante = estudiantes.find(c => c.Id === parseInt(req.params.id));
        if(!estudiante) return res.status(404).send('Estudiante no encontrado');

        const index = estudiantes.indexOf(estudiantes);
        estudiantes.splice(index, 1);
        res.send(estudiante);
    });

    const port = process.env.port || 4430;
    app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));
    
