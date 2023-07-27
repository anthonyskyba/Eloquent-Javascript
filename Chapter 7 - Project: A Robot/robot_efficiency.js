// solution is faster but sometimes doesn't work

function myRobot({place, parcels}, route) {
  let shortestParcelPath = [], shortestAddressPath = []
  let placesToDeliverTo = [], shortestPath = [], counter
  for (let i = 0; i < parcels.length; i++) {
	let parcel = parcels[i]
    
    route = findRoute(roadGraph, place, parcel.place)
    if (shortestParcelPath.length === 0 || route.length < shortestParcelPath.length)
      shortestParcelPath = route
    
    if (parcel.place == place) {
      placesToDeliverTo.push(parcel.address)
      for (let j of placesToDeliverTo) {
        route = findRoute(roadGraph, place, j)
        if (shortestAddressPath.length === 0 || route.length < shortestAddressPath.length)
          shortestAddressPath = route
          counter = j
      }
    }
	if (shortestParcelPath.length < shortestAddressPath.length || shortestAddressPath.length === 0) {
      shortestPath = shortestParcelPath
    } else {
      shortestPath = shortestAddressPath
      placesToDeliverTo = placesToDeliverTo.slice(0, counter).concat(placesToDeliverTo.slice(counter + 1))
    }
  }
  return {direction: shortestPath[0], memory: shortestPath.slice(1)};
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
    for (let i = 0; i <= 1; i++) {
        let task = VillageState.random()
        r1 += robotTurns(task, robot1, memory1)
        r2 += robotTurns(task, robot2, memory2)
    }
    console.log(`myRobot average: ${r1 / 100} turns\noldRobot average: ${r2 / 100} turns`)
}

// compareRobots(myRobot, [], goalOrientedRobot, []);
 
runRobotAnimation(VillageState.random(), myRobot, []);
