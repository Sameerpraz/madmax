const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Congratulations, your extension "sameerext" is now active!');

  const clsCompletion = vscode.languages.registerCompletionItemProvider(
    { scheme: "file", language: "javascript" },
    {
      provideCompletionItems(document, position) {
        const linePrefix = document
          .lineAt(position)
          .text.substr(0, position.character);
        console.log("Completion triggered for linePrefix:", linePrefix);

        // Check if "ssss" is in the line
        if (!linePrefix.includes("ssss")) {
          console.log("Line prefix does not include 'ssss'");
          return undefined;
        }

        const completionItem = new vscode.CompletionItem(
          "ssss",
          vscode.CompletionItemKind.Snippet
        );
        completionItem.insertText = "console.log();";
        completionItem.detail = "Insert console.log()";
        completionItem.documentation = "Shortcut for console.log()";
        completionItem.command = {
          command: "editor.action.triggerSuggest",
          title: "Re-trigger completions",
        };
        return [completionItem];
      },
    }
  );

  context.subscriptions.push(clsCompletion);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
