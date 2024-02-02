# Node Server : Clean and Modular Architecture

### Author : James Brel

### Contact : thecoder38@gmail.com 
---
## Architecture 
   the architecture of each feature is based on the clean architecture of Uncle Bob which is constituted mainly of 3 layers :
   - Data
   - Domain
   - Controllers  
```
📦features
 ┗ 📂say_hello_to_world
 ┃ ┣ 📂controllers
 ┃ ┣ 📂data
 ┃ ┗ 📂domain
```  

## General Folder Structure Tree 
```
📦clean_and_modular_structure
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂envs
 ┃ ┣ 📜dev.env
 ┃ ┣ 📜prod.env
 ┃ ┗ 📜staging.env
 ┣ 📂lib
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂core
 ┃ ┃ ┃ ┣ 📂configs
 ┃ ┃ ┃ ┃ ┣ 📜inversify.config.ts
 ┃ ┃ ┃ ┃ ┣ 📜middle.config.ts
 ┃ ┃ ┃ ┃ ┗ 📜server.config.ts
 ┃ ┃ ┃ ┗ 📜init.ts
 ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┗ 📂hello_mod
 ┃ ┃ ┃ ┃ ┗ 📂features
 ┃ ┃ ┃ ┃ ┃ ┗ 📂say_hello_to_world
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controllers
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜say_hello_to_world_controller.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂data_source
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂impls
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜hello_to_world_impl.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂interfaces
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜hello_to_world_inter.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂reposit_impls
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜system_greet_the_world_reposit_impl.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂domain
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂reposit_interfaces
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜system_greet_the_world_reposit_inter.ts
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂usecases
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜say_hello_word_usecase.ts
 ┃ ┃ ┗ 📂shared
 ┃ ┃ ┃ ┣ 📂constants
 ┃ ┃ ┃ ┃ ┣ 📜api.const.ts
 ┃ ┃ ┃ ┃ ┣ 📜number.const.ts
 ┃ ┃ ┃ ┃ ┣ 📜string.const.ts
 ┃ ┃ ┃ ┃ ┗ 📜version.const.ts
 ┃ ┃ ┃ ┣ 📂extensions
 ┃ ┃ ┃ ┣ 📂global
 ┃ ┃ ┃ ┃ ┗ 📜string.variable.ts
 ┃ ┃ ┃ ┣ 📂logs
 ┃ ┃ ┃ ┃ ┗ 📜logger.ts
 ┃ ┃ ┃ ┣ 📂middlewares
 ┃ ┃ ┃ ┗ 📂services
 ┃ ┃ ┃ ┃ ┣ 📂images
 ┃ ┃ ┃ ┃ ┗ 📂security
 ┃ ┗ 📜index.ts
 ┣ 📂test
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc
 ┣ 📜babel.config.json
 ┣ 📜jest.config.json
 ┣ 📜nodemon.json
 ┣ 📜package.json
 ┣ 📜readme.md
 ┣ 📜tsconfig.json
 ┗ 📜typedoc.json
```

## Usage and Configuration

After downloading or cloning the Git Repository

  1. go to the clean_and_modular_architecture folder and copy the folders
   
  2. go into your **package.json file**, fill the following points:
   
     - "name" : Specify the Project Name
     - "description" : Specify the Project Description
     - "url" : "git+url" (complete the url line with the git url of your repository)
     - "author" : Specify the Project Author (Organisation name)
  
  3. and type ***npm install*** to install all packages of Dependencies and Dev_Dependencies 
---
<p style="text-align: center"> Copyright &copy; 2024 James Brel All Rights Reserved</p>
