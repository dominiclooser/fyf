now = new Date()

isOld = ($task) ->
    # start(1) = 15.8.16
    # start(2) = 22.8.16
    # start(3) = 29.8.16
    # start(i) = 15.8.16T00:00 + (i-1)weeks
    start = (number) ->
        init = new Date(2016, 7, 8)
        return init.setDate(init.getDate() + (number-1)*7)

    number = $task.data('number')
    console.log(number)
    console.log(start(number))
    if start(number) < now 
        return true
    else
        return false

oldTasks = []

for task in $('.task')
    $task = $(task)
    if not $task.hasClass('current')
        if isOld($task)
            $task.show()
            oldTasks.push($task)

$current = oldTasks[0]    
$currentClone = $current.clone()
$currentClone.addClass('current')
$('.current').replaceWith($currentClone)
$current.hide()



