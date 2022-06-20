function superbowlWin(record) {

    const isWin = record.find(game => game.result === "W");
    
    return (isWin ? isWin.year : undefined);

}