const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");
const k8s = require("@kubernetes/client-node");
const util = require('util');
const cp = require('child_process');

let mainWindow;

function validate(yaml){
  const child = cp.spawnSync('./kubeyaml', {input: yaml});
  console.log(child.stdout.toString())
  console.log(child.status)
  // child.stdout.on('data', (data) => console.log(data));
  // child.stdin.write(yaml);
  // child.stdin.end();
  // child.stderr.on('data', data => console.log(data))
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // mainWindow.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, `/dist/k8s-playground/index.html`),
  //     protocol: "file:",
  //     slashes: true
  //   })
  // );

  mainWindow.loadURL('http://localhost:4200/');
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  const kc = new k8s.KubeConfig();
  kc.loadFromDefault();

  mainWindow.config = kc;
  mainWindow.coreV1Api = kc.makeApiClient(k8s.CoreV1Api);
  mainWindow.appsV1Api = kc.makeApiClient(k8s.AppsV1Api);
  mainWindow.validate = validate;
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
