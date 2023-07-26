function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function myRobot({place, parcels}, route) {
  let shortestParcelPath = [], shortestAddressPath = []
  let placesToDeliverTo = [], shortestPath = [], counter
  for (let i = 0; i < parcels.length; i++) {
	let parcel = parcels[i]
    console.log(findRoute(roadGraph, place, parcel.place))
    
    route = findRoute(roadGraph, place, parcel.place)
    if (shortestParcelPath[0] == undefined || route.length < shortestParcelPath.length)
      shortestParcelPath = route
    
    if (parcel.place == place) {
      placesToDeliverTo.push(parcel.address)
      for (let j of placesToDeliverTo) {
        route = findRoute(roadGraph, place, j)
        if (shortestAddressPath[0] == undefined || route.length < shortestAddressPath.length)
          shortestAddressPath = route
          counter = j
      }
    }
	if (shortestParcelPath < shortestAddressPath || shortestAddressPath[0] == undefined)
      shortestPath = shortestParcelPath
    else {
      shortestPath = shortestAddressPath
      placesToDeliverTo = placesToDeliverTo.slice(0, counter).concat(placesToDeliverTo.slice(counter++))
    }
    
  }
  let x = {direction: shortestPath[0], memory: shortestPath.slice(1)};
  return x
}

function robotTurns(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            return turn
        }
        let action = robot(state, memory)
        state = state.move(action.direction)
        memory = action.memory
    }
}

function compareRobots(robot1, memory1, robot2, memory2) {
    let r1 = 0, r2 = 0
    for (let i = 0; i <= 100; i++) {
        let task = VillageState.random()
        r1 += robotTurns(task, robot1, memory1)
        r2 += robotTurns(task, robot2, memory2)
    }
    console.log(`myRobot average: ${r1 / 100} turns\noldRobot average: ${r2 / 100} turns`)
}

// compareRobots(myRobot, [], goalOrientedRobot, []);
 
runRobotAnimation(VillageState.random(), myRobot, []);
