function robotTurns(state, robot, memory) {
    for (let turn = 0;; turn++) {
        if (state.parcels.length == 0) {
            return turn
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function compareRobots(robot1, memory1, robot2, memory2) {
    let r1 = 0, r2 = 0
    for (let i = 0; i <= 100; i++) {
        let task = VillageState.random()
        r1 += robotTurns(task, robot1, memory1)
        r2 += robotTurns(task, robot2, memory2)
    }
    console.log(`robot1 average: ${r1 / 100} turns\nrobot2 average: ${r2 / 100} turns`)
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
