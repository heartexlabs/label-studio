import { execSync, spawn } from 'child_process';
import mkdirp from 'mkdirp';
import fetch from 'node-fetch';
import os from 'os';
import path from 'path';
import rimraf from 'rimraf';

export type ServerControls = {
  hostname: string,
  shutdown: () => Promise<string>
}

const LS_ROOT = path.resolve(process.env.PWD!, '../..');
const pidCache = new Set();
const portCache = new Set();

const findPort = () => {
  let port = 9191;

  while(portCache.has(port.toString())) {
    console.log(`Port is already in use [${port}]. Trying [${port + 1}]`);
    port++;
  }

  portCache.add(port.toString());
  return port.toString();
};

const pingServer = (host: string, onReady: (running: boolean) => void) => {
  setTimeout(async () => {
    const url = `${host}/version`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        onReady(true);
      } else {
        onReady(false);
      }
    } catch {
      pingServer(host, onReady);
    }
  }, 100);
};

export const runTestServer = async () => {
  const verbose = process.env.VERBOSE === 'true' || process.argv.includes('-v') || process.argv.includes('--verbose');
  const freePort = findPort();
  const SERVER_TMP = path.join(os.tmpdir(), `test-server-${freePort}`);

  if (verbose) console.log(`\nBooting testing evrionment [${process.pid}]`);

  rimraf.sync(SERVER_TMP);
  mkdirp.sync(SERVER_TMP);

  const [host, port] = ["localhost", freePort];
  const FULL_HOSTNAME = `http://${host}:${port}`;
  const prepareCmd = `cd ${LS_ROOT} && source ${path.join(LS_ROOT, 'venv/htx/bin/activate')}`;
  const serverCmd = `label-studio --no-browser --host http://${host} --port ${port} --data-dir ${SERVER_TMP}`;

  const serverOptions: any = {
    shell: true,
  };

  if (verbose) {
    serverOptions.stdio = [null, process.stdout, null];
  }

  return new Promise<ServerControls>((resolve) => {
    const server = spawn(`${prepareCmd} && ${serverCmd}`, serverOptions);
    pidCache.add(server.pid);

    const cleanup = async () => {
      return new Promise<void>((resolve) => {
        rimraf(SERVER_TMP, (err) => {
          if (verbose) console.log(`\nRemoving ${SERVER_TMP}`, err);

          pidCache.delete(server.pid);
          if (verbose) console.log(`\nFree PID [${server.pid}]`);

          portCache.delete(freePort);
          if (verbose) console.log(`\nFree port [${freePort}]`);

          resolve();
        });
      });
    };

    const serverControls: ServerControls = {
      hostname: FULL_HOSTNAME,
      shutdown: async () => {
        if (verbose) console.log("\nShutting down testing evrionment");
        await cleanup();

        return execSync(`kill -9 ${server.pid}`).toString();
      },
    };

    pingServer(FULL_HOSTNAME, (success) => {
      if (success) {
        resolve(serverControls);
      } else {
        serverControls.shutdown();
      }
    });

    process.on("SIGTERM", () => {
      if (verbose) console.log("\nExit [SIGTERM]");
      serverControls.shutdown();
    });

    process.on("SIGINT", () => {
      if (verbose) console.log("\nExit [SIGINT]");
      serverControls.shutdown();
    });
  });
};