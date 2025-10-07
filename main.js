const { app, BrowserWindow, ipcMain } = require('electron');
const { execFile } = require('child_process');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 250,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
  win.setMenu(null);
}

app.whenReady().then(createWindow);

ipcMain.on('open-paraview', () => {
  execFile("D:\\programFiles\\paraView\\bin\\paraview.exe", (error) => {
    if (error) console.error("Failed to open ParaView:", error);
  });
});

ipcMain.on('open-blender', () => {
  execFile("D:\\programFiles\\blender\\blender-launcher.exe", (error) => {
    if (error) console.error("Failed to open Blender:", error);
  });
});
