import ChildProcess from 'child_process';


export default class ChildProcessProvider {

  static providerId = 'ChildProcess';

  spawn() {}
}


function Worker(url) {
  this.process = ChildProcess.fork(url);
  this.process.on('message', msg => {
    if (this.onmessage) {
      this.onmessage({ data: JSON.parse(msg) });
    }
  });
  this.process.on('error', err => {
    if (this.onerror) {
      this.onerror(err);
    }
  });
}
Worker.prototype.terminate = function () {
  this.process.kill();
};
