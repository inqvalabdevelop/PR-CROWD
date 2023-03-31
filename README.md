# PR-CRWF
Proyecto de CROWFUNDING para la Incubadora de empresas perteneciente a la Universidad Privada del Valle.

## Conexion con la BD local
Crear un archivo .env en Incuvalab/.env

``PORT = 4000 -- se recomienda usar el puerto 4000 para backend pero pueden escoger uno para realizar sus pruebas``

``DB_PORT = Puerto del SQL server generalmente es el 1433 ``

``DB_USER = tuUsario --Usuario de sql server ``

``DB_PASS = tuPassword --contraseña de sql server ``

``DB_SERVER = localhost -- ip de sql server``

``DB = DBIncuvalab --nombre de la base de datos El archivo .env deberia verse de este tipo esto para cumplir con las buenas practicas y tener la seguridad ``

NOTA: Si no se tiene activada la opcion de conexion mediante el protocolo TCP/IP a sql server se debe activar y configurar el puerto y dirección 
			IP: Para mejor informacion investigar en google y si buscas de la manera correcta tal vez en youtube de tener nuestras 
			credenciales solo disponibles para nosotros y no asi publica
## Instalar dependencias 
``npm install``
NOTA: Ejecutar este comando sobre /Incuvalab y /Incuvalab/client

* Instalar la propiedad sobre /Incuvalab
			``npm i -g @babel/node``
			
* Ejerutar 
		``npm run build`` sobre /Incubalab esto para correr Babel
		
## Correr el proyecto
``npm run start`` sobre /Incuvalab/client

``npm run start`` sobre  /Incuvalab NOTA: Recuerde que al hacer cambios en el directorio /Incuvalab/Server debe de ejecutar previamente ``npm run build``

## Error
	ERROR in Plugin "react" was conflicted between "package.json » eslint-config-react-app » C:\Users\HP\Documents\Universidad Privada del Valle\E_Quinto Semestre\Proyecto de sistemas II\PR-CRWF\incuvalab\client\node_modules\eslint-config-react-app\base.js" and "BaseConfig » C:\Users\HP\Documents\Universidad Privada del Valle\E_Quinto Semestre\Proyecto de sistemas II\PR-CRWF\Incuvalab\client\node_modules\eslint-config-react-app\base.js".
Recompile(Ctrl+S) el archivo package-json 
