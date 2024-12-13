// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "sameerext" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand("ggggg.ggggg", () => {
    const startedTimeDate = Date.now();
    const updateTimer = setInterval((_) => {
      const currentDate = Date.now();
      if (currentDate - startedTimeDate >= 30 * 60 * 1000) {
        clearInterval(updateTimer);
        vscode.window.showInformationMessage("timer is over");
      }
    }, 5000);
    vscode.window.showInformationMessage("A 30 second timer has started");
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
