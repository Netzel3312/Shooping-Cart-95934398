Instrucciones para Iniciar el Proyecto

Este proyecto requiere algunas configuraciones específicas para funcionar correctamente en un entorno de desarrollo. A continuación, te detallo los pasos necesarios para levantar el proyecto.

Nota importante: Este proyecto está basado en una configuración inicial de Vite que se clonó de un repositorio ajeno, lo cual fue necesario para resolver ciertos problemas de compatibilidad y dependencias que impedían el correcto funcionamiento del entorno de desarrollo.
1. Activar Ubuntu WSL

El primer paso es activar el Subsistema de Windows para Linux (WSL) en la carpeta del proyecto dentro de Visual Studio Code. Para ello:

    Abre Visual Studio Code y navega a la carpeta del proyecto.
    Abre la terminal integrada (Ctrl + ) y asegúrate de que está configurada para utilizar Ubuntu WSL.
    Una vez activado el entorno de Ubuntu, estarás listo para ejecutar los siguientes comandos.

2. Iniciar el Proyecto

Con Ubuntu WSL activo, puedes intentar iniciar el proyecto con el siguiente comando:

bash

npm run dev

Este comando debería levantar el servidor de desarrollo. Sin embargo, si experimentas problemas al ejecutarlo, prueba con la siguiente alternativa:

bash

npm vite

3. Instalación de Dependencias

Si ambos comandos anteriores fallan, es probable que necesites reinstalar las dependencias del proyecto. Esto se puede hacer eliminando los módulos actuales y el archivo package-lock.json, para luego realizar una nueva instalación:

bash

rm -rf node_modules package-lock.json
npm install

Este proceso asegurará que todas las dependencias necesarias sean instaladas correctamente.
4. Ejecutar el Proyecto

Una vez completada la instalación de las dependencias, o si no fue necesario realizar los pasos anteriores, puedes iniciar el proyecto utilizando el siguiente comando en la consola:

bash

npm run dev

Este comando debería levantar el entorno de desarrollo sin problemas. Si sigues experimentando dificultades, revisa la configuración de Vite y asegúrate de que todas las dependencias están correctamente instaladas y actualizadas.
English
Project Setup Instructions

This project requires specific configurations to run correctly in a development environment. Below are the detailed steps necessary to get the project up and running.

Important Note: This project is based on an initial Vite setup cloned from an external repository. This step was necessary to resolve certain compatibility issues and dependencies that were preventing the development environment from functioning correctly.
1. Activate Ubuntu WSL

The first step is to activate the Windows Subsystem for Linux (WSL) within the project folder in Visual Studio Code. To do this:

    Open Visual Studio Code and navigate to the project folder.
    Open the integrated terminal (Ctrl + ) and ensure it is set to use Ubuntu WSL.
    Once the Ubuntu environment is activated, you are ready to execute the following commands.

2. Start the Project

With Ubuntu WSL active, you can attempt to start the project using the following command:

bash

npm run dev

This command should start the development server. However, if you encounter issues when running it, try the following alternative:

bash

npm vite

3. Install Dependencies

If both of the previous commands fail, it is likely that you need to reinstall the project's dependencies. This can be done by removing the current modules and the package-lock.json file, followed by a fresh installation:

bash

rm -rf node_modules package-lock.json
npm install

This process will ensure that all necessary dependencies are installed correctly.
4. Run the Project

Once the dependencies have been successfully installed, or if the previous steps were not necessary, you can start the project using the following command in the console:

bash

npm run dev
