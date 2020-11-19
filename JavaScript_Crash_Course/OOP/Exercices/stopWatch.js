//let date = new Date();
//let timestamp = date.getTime();

// let now = date.getDate();
// let day = date.getDay();
// let year = date.getFullYear();
// let mounth = date.getMonth();

//Using instance properties only
function StopWatch() {
  let begin = 0;
  let end = 0;
  let running = 0;
  let duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("Stopwatch has already started");
    }
    running = true;
    begin = new Date();
  };

  this.stop = function () {
    if (!running) {
      throw new Error("Stopwatch is not started");
    }
    running = false;
    end = new Date();
    const seconds = (end.getTime() - begin.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function () {
    let begin = null;
    let end = null;
    let running = false;
    let duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

//Using instance and prototype properties
function StopWatchProperties() {
  let begin = 0;
  let end = 0;
  let running = 0;
  let duration = 0;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });

  Object.defineProperty(this, "begin", {
    get: function () {
      return begin;
    },
    set: function (value) {
      begin = value;
    },
  });

  Object.defineProperty(this, "end", {
    get: function () {
      return end;
    },
    set: function (value) {
      end = value;
    },
  });

  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
    set: function (value) {
      running = value;
    },
  });
}

StopWatchProperties.prototype.start = function () {
  if (this.running) {
    throw new Error("Stopwatch has already started");
  }
  this.running = true;
  this.begin = new Date();
};

StopWatchProperties.prototype.stop = function () {
  if (!this.running) {
    throw new Error("Stopwatch is not started");
  }
  this.running = false;
  this.end = new Date();
  const seconds = (this.end.getTime() - this.begin.getTime()) / 1000;
  this.duration += seconds;
};
StopWatchProperties.prototype.reset = function () {
  this.begin = null;
  this.end = null;
  this.running = false;
  this.duration = 0;
};
