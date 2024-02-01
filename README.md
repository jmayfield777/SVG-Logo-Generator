# SVG-Logo-Generator

## Description

This project is a command line application that generates SVG files for the user. The user must have inquirer@8.2.4 installed, and once it is, they will be asked a series of questions that will be used to create the new SVG file. The finished document will be complete with an opening and closing svg tag, a polygon tag if the user selects a square or triangle shaped logo, a circle tag if the user selects a circle shaped logo, and opening and closing text tags to hold the text the user would like the logo to display.

[Link to logo.svg](./logo.svg)

[Link to walkthrough video](https://drive.google.com/file/d/1TtTnLbAy_nLqIOhUgX7eugmyuNd1-39N/view)

## Installation

To run this project, run the following command:

```
npm init 
```

(add "-y" to answer yes to all questions regarding the creation of the package.json), then run the following code to install the inquirer package to receive the questions to generate the README.md:

```

npm i inquirer@8.2.4
```

## Usage

Clone this repo and save it locally to your computer. Open terminal, git bash, or whichever command line interface you are using and navigate to the directory holding the index.js file. Make sure you have a blank "logo.svg" file which can be used to generate the logo. Run the following command to start the application:

```
node index.js
```

Once you have answered all of the questions, "Successfully generated SVG!" will be logged to the console. Navigate to your SVG file and see that the file has been rendered from the answers you have given in the commmand line.

## Credits

https://stackoverflow.com/questions/48857545/how-can-i-avoid-no-test-specified-errors-in-npm (help with running tests)

https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial (help with svg syntax)

https://www.freecodecamp.org/news/gitignore-file-how-to-ignore-files-and-folders-in-git/ (help creating .gitignore)

https://github.com/rmessett15/SVG-Logo-Maker/blob/main/index.js (help writing functions)

https://github.com/elizabetholsavsky/SVG-logo-maker/blob/main/lib/questions.js (help writing functions)

## License

![License Badge](https://img.shields.io/badge/license-MIT-blue)