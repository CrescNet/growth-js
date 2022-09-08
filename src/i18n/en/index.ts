export default {
  description: {
    label: 'Description',
    text: 'On this page you can enter growth data and visualise it in comparison to a reference population. Please select the reference values to be used first and then enter sex, date of birth and the measured values to be visualised. The values are displayed in the graphics on the right (or below for mobile device users). Click on "Height", "Weight" and "BMI" to switch between the different graphics. You also have the option of zooming with the mouse wheel. With the buttons at the bottom you can import existing data or export your entries and thus present them eg. to your family doctor.'
  },
  dataPrivacy: {
    label: 'Data Privacy',
    text: 'The data entered on this page remains exclusively on your terminal device. Neither operators of this application nor other parties have access to your data at any time. If you click on the button "Save data for later" in "Export", the entries will be saved in your browser.'
  },
  height: 'Height',
  weight: 'Weight',
  bmi: 'BMI',
  deleteRow: 'Delete row',
  date: 'Date',
  addRow: 'Add row',
  birthdate: 'Birthdate',
  female: 'Female',
  male: 'Male',
  sex: 'sex',
  reference: 'Reference',
  reset: 'Reset',
  viewOnGitHub: 'View on GitHub',
  selectReference: 'Please select a reference...',
  normal_german: 'German children without chronic diseases',
  noonan_japan: 'Children with Noonan Syndrome',
  achondroplasia_sweden: 'Children with Achondroplasia',
  hypochondroplasia_argentinia: 'Children with Hypochondroplasia (only height available)',
  trisomy21_america: 'Children with Trisomy 21',
  close: 'Close',
  source: 'Source',
  import: {
    title: 'Import',
    description: 'Load previously exported input data from a JSON file or string.',
    file: {
      title: 'Load file',
      label: 'JSON file'
    },
    json: {
      title: 'Load string',
      label: 'JSON string'
    }
  },
  export: {
    title: 'Export',
    description: 'You have the following options for saving or exporting the data you have entered:',
    browser: {
      title: 'Save in browser',
      description: 'Save the data in your browser to have it directly available the next time you open this page.',
      noChanges: 'There are no changes to save.'
    },
    file: {
      title: 'Save to file',
      description: 'Create a file from your data that can for example be handed over to your family doctor.'
    },
    qrCode: {
      title: 'Show QR code',
      description: 'Display a QR code that can be scanned with a smartphone.',
      description2: 'You can scan this QR code to get your entered data as JSON format. This format is machine-readable.'
    }
  },
  imprint: 'Imprint',
  version: 'Version'
};
