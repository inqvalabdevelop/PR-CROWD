import app from './app';
app.listen(app.get('port'));

console.log("Corriendo en el Puerto", app.get('port'));