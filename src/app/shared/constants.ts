import * as monaco from 'monaco-editor';

export const editorOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
  theme: 'vs-dark',
  language: 'javascript',
  readOnly: true,
  automaticLayout: true,
  padding: {
    top: 5,
  },
};
