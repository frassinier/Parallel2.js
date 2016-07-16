export default class WebWorkerProvider {

  static providerId = 'WebWorker';

  spawn() {}
}


Worker.prototype.onmessage = null;
Worker.prototype.onerror = null;

Worker.prototype.postMessage = function (obj) {
  this.process.send(JSON.stringify({ data: obj }));
};
