(function() {
  var $current, $currentClone, $task, i, isOld, len, now, oldTasks, ref, task;

  now = new Date();

  isOld = function($task) {
    var number, start;
    start = function(number) {
      var init;
      init = new Date(2016, 7, 8);
      return init.setDate(init.getDate() + (number - 1) * 7);
    };
    number = $task.data('number');
    console.log(number);
    console.log(start(number));
    if (start(number) < now) {
      return true;
    } else {
      return false;
    }
  };

  oldTasks = [];

  ref = $('.task');
  for (i = 0, len = ref.length; i < len; i++) {
    task = ref[i];
    $task = $(task);
    if (!$task.hasClass('current')) {
      if (isOld($task)) {
        $task.show();
        oldTasks.push($task);
      }
    }
  }

  $current = oldTasks[0];

  $currentClone = $current.clone();

  $currentClone.addClass('current');

  $('.current').replaceWith($currentClone);

  $current.hide();

}).call(this);
